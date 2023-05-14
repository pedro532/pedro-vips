import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import {
  Firestore, collectionData, collection, query, where,
  DocumentData,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  dataUser: any;
  isButtonShow: any = false;

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private readonly firestore: Firestore) { }

  ngOnInit(): void {
    const baseRef = collection(this.firestore, 'usuarios');

    this.afAuth.currentUser.then(user => {
      if (user && user.emailVerified) {
        this.dataUser = user;
        const q = query(baseRef, where('uid', '==', user.uid))
        const data = collectionData(q)
        data.subscribe(
          (res) => {
            if(res[0]['role'] == "empleado"){
              this.isButtonShow = true
            }else{
              this.isButtonShow = false
            }
          },
          (err) => console.log(err),
          () => console.log('done!')
        )


      } else {
        this.router.navigate(['/login']);
      }
    })

  }

  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }


  carta() {
    this.router.navigate(['/carta']);
  }

  cartaaler() {
    this.router.navigate(['/carta-alerge']);
  }

  descu() {
    this.router.navigate(['/descuentos']);
  }

  reserva() {
    this.router.navigate(['/reserva']);

  }

  descuempleado() {
    this.router.navigate(['/descuempleado']);
  }

}
