import { Component } from '@angular/core';

//Imports para la barra lateral de navegación
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { VacacionComponent } from '../vacacion/vacacion.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { VacacionesComponent } from '../../pages/vacaciones/vacaciones.component';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, VacacionComponent, RouterLink, RouterOutlet, VacacionesComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.sass'
})
export class NavBarComponent implements OnDestroy {
  mobileQuery: MediaQueryList;

  /* fillerNav = Array.from({ length: 6 }, (_, i) => `Nav Item ${i + 1}`); */
  fillerNav = [{ url: '', textoEnlace: "Home" }, { url: '/nuevo-viaje', textoEnlace: "Nuevo Viaje" }]

  private _mobileQueryListener: () => void;

  constructor() {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
