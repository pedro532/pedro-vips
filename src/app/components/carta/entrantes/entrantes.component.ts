import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrantes',
  templateUrl: './entrantes.component.html',
  styleUrls: ['./entrantes.component.css']
})
export class EntrantesComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,
    private router: Router) { }

  ngOnInit(): void {
  }

  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }

  ini() {
    this.router.navigate(['/inicio']);
  }

  entrantes() {
    this.router.navigate(['/entrantes']);
  }

  principales() {
    this.router.navigate(['/principales']);
  }

  ensaladas() {
    this.router.navigate(['/ensaladas']);
  }

  sandwi() {
    this.router.navigate(['/sandwiches']);
  }

  hambu() {
    this.router.navigate(['/hamburguesas']);
  }

  bebidas() {
    this.router.navigate(['/bebidas']);
  }

  postres() {
    this.router.navigate(['/postres']);
  }
}
