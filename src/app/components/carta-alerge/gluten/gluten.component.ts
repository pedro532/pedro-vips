import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gluten',
  templateUrl: './gluten.component.html',
  styleUrls: ['./gluten.component.css']
})
export class GlutenComponent implements OnInit {

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

  gluten() {
    this.router.navigate(['/gluten']);
  }

  lacteos() {
    this.router.navigate(['/lacteos']);
  }

  frutos() {
    this.router.navigate(['/frutos']);
  }

  pescado() {
    this.router.navigate(['/pescado']);
  }

  soja() {
    this.router.navigate(['/soja']);
  }

}
