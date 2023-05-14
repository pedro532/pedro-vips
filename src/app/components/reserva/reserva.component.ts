import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import {
  Firestore, collectionData, collection, query, where,
  DocumentData,
} from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { addDoc } from 'firebase/firestore';






@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  i = 0;
  numeroTelefono: any;
  comensales: any;
  dia: any;
  horas = ['20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00',];
  comensalesop = ['1', '2', '3', '4', '5', '6', '7', '8',];
  dias = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',];
  horareserva: any;
  fechareserva: any;
  numeroTelefonocancelacion: any;

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute,
    private readonly firestore: Firestore) {}

  ngOnInit(): void {
  }

  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }

  ini() {
    this.router.navigate(['/inicio']);
} 

  reservar() {
    this.fechareserva = this.dia + "-" + this.horareserva;
    const baseRef = collection(this.firestore, 'reservas');
    this.router.navigate(['/inforeserva', this.numeroTelefono]);
    
    return addDoc(baseRef,{"comensales" : this.comensales, "fecha" : this.fechareserva , "telefono" : this.numeroTelefono});
  }

  cancelar() {
    const baseRef = collection(this.firestore, 'reservas');
  
          const q = query(baseRef)
          const data = collectionData(q)
          data.subscribe(
            (res) => {
              
              do {if(res[this.i]['telefono'] == this.numeroTelefonocancelacion){
                this.router.navigate(['/cancelarreserva', this.numeroTelefonocancelacion]);
              }
            this.i++
            }
              while(this.i<res.length)
              
            },
            (err) => console.log(err),
            () => console.log('done!')
            
          )
  }

}