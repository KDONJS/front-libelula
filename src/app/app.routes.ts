import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { NotfoundComponent } from './components/utils/notfound/notfound.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'Instalaciones', component: InstalacionesComponent},
    {path: 'Habitaciones', component: HabitacionesComponent},
    {path: 'Contactanos', component: ContactanosComponent},
    {path: '**', component: NotfoundComponent}
];
