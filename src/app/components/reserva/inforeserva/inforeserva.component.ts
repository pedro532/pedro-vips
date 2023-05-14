import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import {
  Firestore, collectionData, collection, query, where,
  DocumentData,
} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-inforeserva',
  templateUrl: './inforeserva.component.html',
  styleUrls: ['./inforeserva.component.css']
})
export class InforeservaComponent implements OnInit {

  numeroTelefono: any;
  comensales: any;
  fechareserva: any;
  i = 0;

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute,
    private readonly firestore: Firestore) { this.route.params.subscribe(params => {
      this.numeroTelefono = params['numeroTelefono'];
    }); }

  ngOnInit(): void {
    const baseRef = collection(this.firestore, 'reservas');

        const q = query(baseRef)
        const data = collectionData(q)
        data.subscribe(
          (res) => {
                  console.log(res)
                  do {if(res[this.i]['telefono'] == this.numeroTelefono){
                    this.comensales = res[this.i]['comensales']
                    this.fechareserva = res[this.i]['fecha']
                  }
                this.i++
                }
                  while(this.i<res.length)
          },
          (err) => console.log(err),
          () => console.log('done!')
          
        )

          
      }

  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }

  ini() {
    this.router.navigate(['/inicio']);
} 

}
