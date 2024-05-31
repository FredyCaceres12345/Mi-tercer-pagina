import { Component, OnInit } from '@angular/core';
import { collection, collectionData, Firestore, doc, deleteDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
type FirebaseTimestamp = {
  seconds: number;
  nanoseconds: number;
};
@Component({
  selector: 'app-escuela-list',
  templateUrl: './escuela-list.page.html',
  styleUrls: ['./escuela-list.page.scss'],
})


export class EscuelaListPage implements OnInit {

  listaEscuelas: any[] = [];
  listaEscuelasFiltrados: any[] = [];




  constructor(
    private readonly firestore: Firestore,
    private rt: Router
  ) {

  }

  ngOnInit() {
    this.listarEscuelas();
  }

  listarEscuelas = () => {
    console.log('listar escuelas');
    const escuelaRef = collection(this.firestore, 'escuela');
    collectionData(
      escuelaRef,
      { idField: 'id' }
    ).subscribe(
      respuesta => {
        console.log("estos son las escuelas ", respuesta);
        this.listaEscuelas = respuesta;
        this.listaEscuelasFiltrados = this.listaEscuelas;
      }
    )
  }

  filterItems(event: any) {
    const searchTerm = event.detail.value;

    if (searchTerm && searchTerm.trim() != '') {
      this.listaEscuelasFiltrados = this.listaEscuelas.filter((item) => {
        // Asegurarse de que el ítem, nombre y apellido existen, proporcionando valores predeterminados para evitar errores
        const codigoConvertido = String(item.codigo);
        const codigo = codigoConvertido ? codigoConvertido.toLowerCase() : '';
        const nombre = item.nombre ? item.nombre.toLowerCase() : '';
        const apellido = item.apellido ? item.apellido.toLowerCase() : '';
        const searchTermLower = searchTerm.toLowerCase();

        // Comprobar si el término de búsqueda está incluido en el nombre o el apellido
        return codigo.includes(searchTermLower) || nombre.includes(searchTermLower) || apellido.includes(searchTermLower);
      });
    } else {
      this.listaEscuelasFiltrados = this.listaEscuelas;
    }
  }

  nuevo = () => {
    this.rt.navigate(['/escuela-edit']);


  }

  eliminarEscuela = (id: string) => {
    console.log('aqui eliminar en firebase');
    const document = doc(this.firestore, 'escuela', id);

    deleteDoc(document).then(() => {
      console.log('registro eliminado');
      //this.volver();
    }).catch((error) => {
      console.error("Error al eliminar el documento: ", error);
    });

  }

 

  formatearFecha(timestamp: FirebaseTimestamp, locale: string = 'es-ES'): string {
    // Convertir el timestamp de Firebase a milisegundos
    const milisegundos = (timestamp.seconds * 1000) + (timestamp.nanoseconds / 1000000);
  
    // Crear un objeto Date con el valor en milisegundos
    const fecha = new Date(milisegundos);
  
    // Ajustar las opciones para el formato deseado
    const opciones: Intl.DateTimeFormatOptions = {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    };
  
    // Usar toLocaleDateString para obtener la fecha en el formato local y luego reemplazar los separadores según sea necesario
    const fechaFormateada = fecha.toLocaleDateString(locale, opciones);
  
    // Dependiendo del locale, es posible que necesites ajustar este paso. 
    // Esto asume que el separador es '/' para el formato 'es-ES'. Si tu locale utiliza otro separador, ajusta esto acordemente.
    return fechaFormateada; // Esto debería retornar la fecha en el formato 'dd/mm/yyyy'
  }
}



