import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import {
  Firestore, collectionData, collection, query, where,
  DocumentData,
} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-tarjetadecuento',
  templateUrl: './tarjetadecuento.component.html',
  styleUrls: ['./tarjetadecuento.component.css']
})
export class TarjetadecuentoComponent implements OnInit {

  titulo: any;
  descripcion: any;

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private readonly firestore: Firestore,
    private route: ActivatedRoute,
    
) { }

    ngOnInit() {
      const baseRef = collection(this.firestore, 'descuentos');
          const q = query(baseRef)
          const data = collectionData(q)
          data.subscribe(
            (res) => {
             this.titulo = res[0]['titulo'];
             this.descripcion = res[0]['descripcion'];
             console.log(res);
             
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
}
