import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import {
  Firestore, collectionData, collection, query, where,
  DocumentData,
} from '@angular/fire/firestore';


@Component({
  selector: 'app-descuentos',
  templateUrl: './descuentos.component.html',
  styleUrls: ['./descuentos.component.css']
})
export class DescuentosComponent implements OnInit {
  titulo: any;
  descripcion: any;
  i: number = 0;
  tarjetavisible: any[] = [];
  tarjetavisible1: any;


  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private readonly firestore: Firestore) { }

    ngOnInit(): void {
      const baseRef = collection(this.firestore, 'descuentos');
  
          const q = query(baseRef)
          const data = collectionData(q)
          data.subscribe(
            (res) => {
              
              do {if(res[this.i]['visible'] == true){
                this.tarjetavisible[this.i] = true
              }else{
                this.tarjetavisible[this.i] = false
              }
              console.log(res)
              console.log(this.tarjetavisible)
            this.i++
            }
              while(this.i<res.length)
              
            },
            (err) => console.log(err),
            () => console.log('done!')
            
          )

            
        }
      
  
    

  

  promo1() {
    alert("Nuestro menú del día VIPS incluye primero, segundo, postre o café y bebida para que disfrutes de una comida completa día a día. Aparte de que solo es valido de lunes a viernes.")
  }

  promo2() {
    alert("En VIPS te rellenamos GRATIS tus refrescos todas las veces que quieras*. Podréis disfrutar de tantos refrescos como os apetezca y pagar sólo el primero.")
  }

  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }

  ini() {
    this.router.navigate(['/inicio']);
  }

}
