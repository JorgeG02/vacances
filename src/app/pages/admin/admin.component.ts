import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Ivacacion } from '../../vacacion';
import { DatosVacacionService } from '../../services/datos-vacacion.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { ChangeDetectionStrategy} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';



@Component({
  selector: 'app-admin',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatTableModule, MatIconModule, MatButtonModule, MatInputModule, MatDatepickerModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.sass'
})
  
export class AdminComponent {

  viajes: Ivacacion[] = [];
  id: number;
  formularioOculto: boolean = true;
  viajeAEditar: Ivacacion = {
    id: -1,
    viaje: "",
    fecha: "",
    imagen: "",
    descripcion: "",
    detalle: ""
  }

  constructor(private datosVacacionService: DatosVacacionService) {
    this.viajes = datosVacacionService.actualizaViajes();
  }

  displayedColumns: string[] = ['id', 'viaje', 'fecha', 'imagen', 'descripcion', 'editar', 'eliminar'];
  dataSource = this.viajes;

  removeViaje(i: number) {
    alert("¿Seguro que quieres elimninar este viaje?")
    this.viajes = this.datosVacacionService.removeViaje(i)
  }

  editViaje(id: number): void {
    this.formularioOculto = false;

    console.log(`esto es lo que devuelve: ${id}`);
    this.viajeAEditar = this.datosVacacionService.getViajeById(id);
    this.viajeAEditar.id = id;
 
    console.log(`estos son los datos: ${this.viajeAEditar.viaje}`);
  }

  modificaViaje(viaje: Ivacacion) {
    this.viajeAEditar = viaje;
    alert(this.viajeAEditar.viaje);
    this.datosVacacionService.actualizaViajeById(this.viajeAEditar.id!, this.viajeAEditar);
    this.formularioOculto = true;
    
  }

}
