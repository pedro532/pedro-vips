import { collection } from '@angular/fire/firestore';
import { Injectable } from "@angular/core";
import { AngularFirestore } from "@angular/fire/compat/firestore";

@Injectable({
    providedIn: 'root'
})
export class EmpleadoService {
    
    constructor(private firestore: AngularFirestore) {}

    agregar(empleado: any): Promise<any> {
        return this.firestore.collection('empleados').add(empleado)
    }
}