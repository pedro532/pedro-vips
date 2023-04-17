import { FirebaseCodeErrorService } from 'src/app/services/firebase-code-error.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {
  recuperarUsuario: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder,
    private afAuth: AngularFireAuth, private router: Router, private firebaseError: FirebaseCodeErrorService) { 
      this.recuperarUsuario = this.fb.group({
        correo: ['', Validators.required]
      })
     }

  ngOnInit(): void {
  }

  recuperar() {
    const email = this.recuperarUsuario.value.correo;

    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email).then(() => {

      alert('le enviamos un correo')
      this.router.navigate(['/login']);
    }).catch((error) =>{
      this.loading = false;
      alert(this.firebaseError.codeError(error.code));
    })
  }

}
