import { FirebaseCodeErrorEnum } from './../utils/firebase-code-error';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirebaseCodeErrorService {

  constructor() { }
  codeError(code: string) {

    switch(code) {
      case FirebaseCodeErrorEnum.EmailEnUso:
        return 'FALLO, El usuario ya existe'
        case FirebaseCodeErrorEnum.ContraseñaMal:
        return 'FALLO, contraseña incorrecta'
        case FirebaseCodeErrorEnum.UsuarioNoEncontrado:
        return 'FALLO, el usuario no existe'
        case FirebaseCodeErrorEnum.ContraseñaDebil:
        return 'FALLO, La contraseña es debil'
        case FirebaseCodeErrorEnum.CorreoInvalido:
        return 'FALLO, correo invalido'
      default:
      return 'FALLO, error desconocido'
    }

  }
}
