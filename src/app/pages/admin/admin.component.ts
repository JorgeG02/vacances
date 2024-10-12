import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Ivacacion } from '../../vacacion';
import { DatosVacacionService } from '../../services/datos-vacacion.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
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
    id: 0,
    viaje: "",
    fecha: "",
    imagen: "",
    descripcion: "",
    detalle: ""
  }

  displayedColumns: string[] = ['id', 'viaje', 'fecha', 'imagen', 'descripcion', 'editar', 'eliminar'];
  dataSource = this.viajes;

  constructor(private datosVacacionService: DatosVacacionService) {

    this.viajes = datosVacacionService.actualizaViajes();

  }

  removeViaje(i: number) {

    const confirmacion = this.confirmarBorrado();
    if (!confirmacion) {
      return;
    }
    this.viajes = this.datosVacacionService.removeViaje(i)
  }

  editViaje(id: number): void {

    this.formularioOculto = false;
    this.viajeAEditar = this.datosVacacionService.getViajeById(id);
    this.viajeAEditar.id = id;

  }

  modificaViaje(viaje: Ivacacion) {

    this.viajeAEditar = viaje;
    this.datosVacacionService.modificaViajeById(this.viajeAEditar.id!, this.viajeAEditar);
    this.formularioOculto = true;

  }

  confirmarBorrado(): boolean {

    return window.confirm('¿Estás seguro de que deseas eliminar este viaje?');

  }

}
