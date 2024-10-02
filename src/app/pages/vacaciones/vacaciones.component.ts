import { Component, input, OnInit } from '@angular/core';
import { VacacionComponent } from '../../shared/vacacion/vacacion.component';
import { NavBarComponent } from '../../shared/nav-bar/nav-bar.component';
import { Ivacacion } from '../../vacacion';

//Servicios
import { DatosVacacionService } from '../../shared/services/datos-vacacion.service';

@Component({
  selector: 'app-vacaciones',
  standalone: true,
  imports: [VacacionComponent, NavBarComponent],
  templateUrl: './vacaciones.component.html',
  styleUrl: './vacaciones.component.sass'
})
  
export class VacacionesComponent {

 
  
  constructor(private datosVacacionService: DatosVacacionService) {
    
  }
  
  
}
