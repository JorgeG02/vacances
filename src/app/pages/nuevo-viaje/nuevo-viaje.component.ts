import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { Ivacacion } from '../../vacacion';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, Validators, FormGroup } from '@angular/forms';



//Servicios
import { DatosVacacionService } from '../../shared/services/datos-vacacion.service';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-nuevo-viaje',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, MatButtonModule, ReactiveFormsModule, NgIf],
  templateUrl: './nuevo-viaje.component.html',
  styleUrl: './nuevo-viaje.component.sass',
  changeDetection: ChangeDetectionStrategy.OnPush
})
  
export class NuevoViajeComponent {

  formNuevoViaje = new FormGroup({
    viaje : new FormControl('', Validators.required),
    fecha : new FormControl('', Validators.required),
    imagen : new FormControl('', Validators.required),
    descripcion : new FormControl('', [Validators.required, Validators.maxLength(120)]),
    detalle : new FormControl('')
  });

  get viaje () {
    return this.formNuevoViaje.get('viaje') as FormControl;
  }
  get fecha() {
    return this.formNuevoViaje.get('fecha');
  }
  get imagen() {
    return this.formNuevoViaje.get('imagen') as FormControl;
  }
  get descripcion() {
    return this.formNuevoViaje.get('descripcion') as FormControl;
  }

  viajes: Ivacacion[];
  constructor(private datosVacacionService: DatosVacacionService, private router: Router) { }

  creaViaje(viaje: string, fecha: string, imagen: string, descripcion: string, detalle: string) {
    this.datosVacacionService.creaViaje(viaje, fecha, imagen, descripcion, detalle);
    this.viajes = this.datosVacacionService.viajes;
    this.router.navigate(['']); 
  }
  creaViaje2() {
    this.datosVacacionService.creaViaje(this.formNuevoViaje.value.viaje!, this.formNuevoViaje.value.fecha!, this.formNuevoViaje.value.imagen!, this.formNuevoViaje.value.descripcion!, this.formNuevoViaje.value.detalle!) ;
    this.viajes = this.datosVacacionService.viajes;
    
    // console.log(this.formNuevoViaje.value.viaje);
    console.log(this.formNuevoViaje.value.fecha);
    // console.log(this.formNuevoViaje.value.imagen);
    // console.log(this.formNuevoViaje.value.descripcion);
    // console.log(this.formNuevoViaje.value.detalle);
    //this.router.navigate(['']); 

  }
}

