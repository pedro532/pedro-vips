import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Component, OnInit } from '@angular/core';
import {
  Firestore, collectionData, collection, query, where,
  DocumentData,
} from '@angular/fire/firestore';

@Component({
  selector: 'app-descuempleado',
  templateUrl: './descuempleado.component.html',
  styleUrls: ['./descuempleado.component.css']
})
export class DescuempleadoComponent implements OnInit {

  constructor(private afAuth: AngularFireAuth,
    private router: Router,
    private readonly firestore: Firestore) { }

  ngOnInit(): void {
  }

  logOut() {
    this.afAuth.signOut().then(() => this.router.navigate(['/login']));
  }

  ini() {
    this.router.navigate(['/inicio']);
  }

}
