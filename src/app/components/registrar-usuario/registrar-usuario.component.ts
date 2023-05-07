import { UserI } from './../models/models';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth'
import { Router } from '@angular/router';
import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { EmpleadoService } from 'src/app/services/empleado.service';


@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.component.html',
  styleUrls: ['./registrar-usuario.component.css']
})
export class RegistrarUsuarioComponent implements OnInit {
  registrarUsuario: FormGroup;
  loading: boolean = false;
  

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth, private router: Router, private FirebaseError: FirebaseCodeErrorService,
    private _empleadoService: EmpleadoService) { 
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repetirPassword: ['', Validators.required],
      perfil: 'cliente',
      uid: 'nada',
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
      this.verificarCorreo();
    })
    .catch((error) => {
      this.loading = false;
      alert(this.FirebaseError.codeError(error.code),);
    } )
  }

  verificarCorreo() {
    this.afAuth.currentUser.then(user => user?.sendEmailVerification())
    .then(() => {
      alert('Le enviamos un correo de verificación');
      this.router.navigate(['/login']);
      console.log('email ->' ,this.registrarUsuario.value);
     });
     
  }

  

}
