import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})
export class DescuentosComponent implements OnInit {

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

  promo1() {
    alert("Nuestro menú del día VIPS incluye primero, segundo, postre o café y bebida para que disfrutes de una comida completa día a día. Aparte de que solo es valido de lunes a viernes.")
  }

  promo2() {
    alert("En VIPS te rellenamos GRATIS tus refrescos todas las veces que quieras*. Podréis disfrutar de tantos refrescos como os apetezca y pagar sólo el primero.")
  }
}
