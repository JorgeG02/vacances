import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Ivacacion } from '../../vacacion';

//Servicios
import { DatosVacacionService } from '../services/datos-vacacion.service';


@Component({
  selector: 'app-vacacion',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './vacacion.component.html',
  styleUrl: './vacacion.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VacacionComponent {

  viajes: Ivacacion[];

  constructor(private datosVacacionService: DatosVacacionService) {
    if (datosVacacionService.obtenerDeLocalStorage().length === 0) {
      this.viajes = datosVacacionService.viajes;
    } else {
      this.viajes = datosVacacionService.obtenerDeLocalStorage();
    }
  }
}
