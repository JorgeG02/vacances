import { Component, input, OnInit } from '@angular/core';
import { VacacionComponent } from '../../shared/vacacion/vacacion.component';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';

@Component({
  selector: 'app-vacaciones',
  standalone: true,
  imports: [VacacionComponent, NavBarComponent],
  templateUrl: './vacaciones.component.html',
  styleUrl: './vacaciones.component.sass'
})
  
export class VacacionesComponent {
   
  viajes = [{
    viaje: "Grecia",
    fecha: "agosto 1996",
    imagen: "img/playa.jpg",
    descripcion: "Aquel año cogimos un apartamento cerca de las playas de Grecia.",
    detalle: ""
  }, {
    viaje: "Los Alpes",
    fecha: "septiembre 2012",
    imagen: "https://cdn.pixabay.com/photo/2019/06/08/03/50/the-side-of-the-road-4259510_1280.jpg",
    descripcion: "Aquel año cogimos un apartamento cerca de las playas de Grecia.",
    detalle: ""
  }, {
    viaje: "Grecia",
    fecha: "agosto 1996",
    imagen: "img/playa.jpg",
    descripcion: "Aquel año cogimos un apartamento cerca de las playas de Grecia.",
    detalle: "Detalle"
    }]
  
  
  /* fillerContent = Array.from(
    {length: 6},
    (_, i) => ``
    `Vacacion ${i}`
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`, 
  ); */
}
