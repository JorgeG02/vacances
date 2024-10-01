import { Routes } from '@angular/router';
import { NuevoViajeComponent } from './pages/nuevo-viaje/nuevo-viaje.component';
import { VacacionComponent } from './shared/vacacion/vacacion.component';
import { VacacionesComponent } from './pages/vacaciones/vacaciones.component';

export const routes: Routes = [
    {path: "", component: VacacionesComponent},
    {path: "nuevo-viaje", component: NuevoViajeComponent}
];
