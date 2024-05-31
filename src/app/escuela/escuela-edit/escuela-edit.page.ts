import { Component, OnInit } from '@angular/core';
import { collection, addDoc, updateDoc, getDoc, Firestore, doc, } from '@angular/fire/firestore';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-escuela-edit',
  templateUrl: './escuela-edit.page.html',
  styleUrls: ['./escuela-edit.page.scss'],
})
export class EscuelaEditPage implements OnInit {

  id: any;
  escuela: any = [];
  constructor(
    private readonly firestore: Firestore,
    private route: ActivatedRoute,
    private rt: Router
  ) { }

  ngOnInit() {

    this.route.params.subscribe((params: any) => {
      //console.log('params', params);
      this.id = params.id;
      //console.log('id', this.id);
      if (this.id) {
        this.obtenerEscuela(this.id);
      }

    });
  }

  volver = () => {
    this.rt.navigate(['/escuela-list']);


  }
  accion = (id: string) => {
    if (this.id) {
      //console.log("modificar");
      this.editarEscuela(this.id);
    
    } else {
      //console.log("guardar");
      this.incluirEscuela();

    }
    this.volver();
  }

  incluirEscuela = () => {
    console.log('aqui incluir en firebase');
    let alumnaRef = collection(this.firestore, 'escuela');

    addDoc(
      alumnaRef,
      {
        codigo: (this.escuela.codigo)?(this.escuela.codigo):0,
        nombre: (this.escuela.nombre)?(this.escuela.nombre):"",
        apellido: (this.escuela.apellido)?(this.escuela.apellido):"",
        nacimiento: (this.escuela.nacimiento)?(new Date(this.escuela.nacimiento)):new Date(),
        activo: (this.escuela.activo)?(this.escuela.activo):false,
      }

    ).then(doc => {
      console.log('registro incluido');
      this.volver();

    }
    );
  }

  editarEscuela = (id: string) => {
    console.log('aqui editar en firebase');
    const document = doc(this.firestore, 'escuela', this.id);

    updateDoc(
      document,
      {
        codigo: (this.escuela.codigo)?(this.escuela.codigo):0,
        nombre: (this.escuela.nombre)?(this.escuela.nombre):"",
        apellido: (this.escuela.apellido)?(this.escuela.apellido):"",
        nacimiento: (this.escuela.nacimiento)?(new Date(this.escuela.nacimiento)):new Date(),
        activo: (this.escuela.activo)?(this.escuela.activo):false,
      }

    ).then(doc => {
      console.log('registro editado');
      this.volver();

    }
    );
  }

  obtenerEscuela = (id: string) => {

    const document = doc(this.firestore, 'escuela', id);

    

    getDoc(document).then(doc => {
      console.log('registro a editar', doc.data());
      this.escuela = doc.data();
      const timestamp = this.escuela.nacimiento; // Asume que 'fecha' es el campo Timestamp
      this.escuela.nacimiento = timestamp.toDate().toISOString(); // Convierte a ISO 8601
      
    }
    );
  }
  

}
