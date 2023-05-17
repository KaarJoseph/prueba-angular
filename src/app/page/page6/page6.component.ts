import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Contacto } from 'src/app/domain/contacto';
import { ContactoService } from 'src/app/services/contacto.service';

@Component({
  selector: 'app-page6',
  templateUrl: './page6.component.html',
  styleUrls: ['./page6.component.css']
})
export class Page6Component {

  listadoContactos: Contacto[] = [];
  contactoSeleccionado: Contacto | null = null;

  constructor(private contactoService: ContactoService, private router: Router) {
    this.listadoContactos = contactoService.getList();
    console.log('listadoContactos', this.listadoContactos);
  }

  editar(contacto: Contacto){
    console.log(contacto);
    let params: NavigationExtras = {
      queryParams: {
        contacto: contacto,
        nombre: 'Joseph'
      }
    };
    this.router.navigate(['formulario'], params);
    //this.router.navigate(['page/page5'], params);
  }

  eliminar(event: Event, contacto: Contacto) {
    event.preventDefault(); // Evitar la acción por defecto del enlace
    const indice = this.listadoContactos.indexOf(contacto);
    if (indice !== -1) {
      this.listadoContactos.splice(indice, 1);
    }
  }
  
  nuevo() {
    this.router.navigate(['page/page5']);
  }
}
