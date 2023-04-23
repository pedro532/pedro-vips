import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  dataUser: any;

  constructor(private afAuth: AngularFireAuth,
    private router: Router) { }

  ngOnInit(): void {
    this.afAuth.currentUser.then(user => {
        if(user && user.emailVerified) {
          this.dataUser = user;
      } else {
        this.router.navigate(['/login']);
      }
    })
  }

  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }

  insta() {
    this.router.navigate(['/https://www.instagram.com/envips/']);
  }

}
