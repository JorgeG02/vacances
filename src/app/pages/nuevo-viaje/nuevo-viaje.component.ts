import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Ivacacion } from '../../vacacion';
import { Router } from '@angular/router';


//Servicios
import { DatosVacacionService } from '../../shared/services/datos-vacacion.service';

@Component({
  selector: 'app-nuevo-viaje',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './nuevo-viaje.component.html',
  styleUrl: './nuevo-viaje.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
  
export class NuevoViajeComponent {

  viajes: Ivacacion[];
  constructor(private datosVacacionService: DatosVacacionService, private router: Router) { }

  creaViaje(viaje: string, fecha: string, imagen: string, descripcion: string, detalle: string) {
    this.datosVacacionService.creaViaje(viaje, fecha, imagen, descripcion, detalle);
    this.viajes = this.datosVacacionService.viajes;
    this.router.navigate(['']); 
  }
}

