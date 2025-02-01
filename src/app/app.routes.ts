import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { NotfoundComponent } from './components/utils/notfound/notfound.component';
import { TarifaComponent } from './components/home/tarifa/tarifa.component';
import { HospitalidadComponent } from './components/home/hospitalidad/hospitalidad.component';
import { InstalacionesNavComponent } from './components/home/instalaciones-nav/instalaciones-nav.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
      path: 'home', component: HomeComponent,
      children: [
        { path: 'tarifa', component: TarifaComponent },
        { path: 'hospitalidad', component: HospitalidadComponent },
        { path: 'instalaciones', component: InstalacionesNavComponent },
        { path: '', redirectTo: 'tarifa', pathMatch: 'full' }
      ]
    },

    {path: 'Instalaciones', component: InstalacionesComponent},
    {path: 'Habitaciones', component: HabitacionesComponent},
    {path: 'Contactanos', component: ContactanosComponent},
    {path: '**', component: NotfoundComponent}
];
