import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nuevo-viaje',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './nuevo-viaje.component.html',
  styleUrl: './nuevo-viaje.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
  
export class NuevoViajeComponent{

  viaje = "Suecia";
  fecha = "agosto 1998";
  imagen = "img/playa.jpg";
  descripcion = "Aquel año cogimos un apartamento cerca de las playas de Grecia.";
  detalle = "";
  nuevoViaje: object = {};

  creaViaje(viaje: string, fecha: string, imagen: string, descripcion: string) {
    this.viaje = viaje;
    this.fecha = fecha;
    this.imagen = imagen;
    this.descripcion = descripcion;
    this.nuevoViaje = [viaje, fecha, imagen, descripcion ];
    console.log(this.nuevoViaje)
   
  }
}
