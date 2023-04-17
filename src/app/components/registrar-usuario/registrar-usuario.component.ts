import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';

@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth, private router: Router, private FirebaseError: FirebaseCodeErrorService) { 
    this.registrarUsuario = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      repetirPassword: ['', Validators.required],
    })
  }

  ngOnInit(): void {
  }

  registrar() {
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;
    
    if (password !== repetirPassword){
      alert('FALLO, las contraseñas deben coincidir')
      return;
    }

    this.loading = true;
    this.afAuth.createUserWithEmailAndPassword(email, password).then((user) => {
      this.loading = false;
      this.router.navigate(['/login']);
      console.log(user);
    }).catch((error) => {
      this.loading = false;
      alert(this.FirebaseError.codeError(error.code),);
    } )
  }

  

}
