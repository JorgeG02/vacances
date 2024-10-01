import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Ivacacion } from '../../vacacion';
import { VacacionesComponent } from '../../pages/vacaciones/vacaciones.component';
import { NuevoViajeComponent } from '../../pages/nuevo-viaje/nuevo-viaje.component';

@Component({
  selector: 'app-vacacion',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, VacacionesComponent, NuevoViajeComponent],
  templateUrl: './vacacion.component.html',
  styleUrl: './vacacion.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VacacionComponent implements Ivacacion{

  //vacacion: Ivacacion = { viaje: "", fecha: "", imagen: "", descripcion: "", detalle: "" };
  viaje = "Grecia";
  fecha = "agosto 1998";
  imagen = "img/playa.jpg";
  descripcion = "Aquel año cogimos un apartamento cerca de las playas de Grecia.";
  detalle = "";

  nuevoViaje = []
  /*vacacion = new VacacionComponent(this.viaje, this.fecha, this.imagen, this.descripcion, this.detalle);

   constructor( viaje: string, fecha: string, imagen: string, descripcion: string, detalle: string ) {
    this.viaje = viaje;
    this.fecha = fecha;
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.detalle = detalle;
  } */
  
 

}
