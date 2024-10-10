import { Routes } from '@angular/router';
import { NuevoViajeComponent } from './pages/nuevo-viaje/nuevo-viaje.component';
import { VacacionesComponent } from './pages/vacaciones/vacaciones.component';
import { AdminComponent } from './pages/admin/admin.component';


export const routes: Routes = [
    {path: "", component: VacacionesComponent},
    {path: "nuevo-viaje", component: NuevoViajeComponent},
    {path: "admin", component: AdminComponent},
];
