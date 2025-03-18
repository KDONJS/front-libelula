import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstalacionesComponent } from './components/instalaciones/instalaciones.component';
import { HabitacionesComponent } from './components/habitaciones/habitaciones.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { NotfoundComponent } from './components/utils/notfound/notfound.component';
import { TarifaComponent } from './components/home/tarifa/tarifa.component';
import { HospitalidadComponent } from './components/home/hospitalidad/hospitalidad.component';
import { InstalacionesNavComponent } from './components/home/instalaciones-nav/instalaciones-nav.component';
import { PaginadescriptivaComponent } from './components/utils/paginadescriptiva/paginadescriptiva.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { TerminoComponent } from './components/termino/termino.component';
import { BlogComponent } from './components/blog/blog.component';
import { DetalleblogComponent } from './components/utils/detalleblog/detalleblog.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {
      path: 'home', component: HomeComponent,
      children: [
        { path: 'tarifa', component: TarifaComponent },
        { path: 'Ubicacion', component: HospitalidadComponent },
        { path: 'instalaciones', component: InstalacionesNavComponent },
        { path: '', redirectTo: 'tarifa', pathMatch: 'full' }
      ]
    },
    {path: 'Instalaciones', component: InstalacionesComponent},
    {path: 'Habitaciones', component: HabitacionesComponent},
    {path: 'Contactanos', component: ContactanosComponent},
    {path: 'nosotros', component: NosotrosComponent},
    {path: 'terminos', component: TerminoComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'Habitaciones/detalle/:id', component: PaginadescriptivaComponent},
    {path: 'blog/detalle/:id', component: DetalleblogComponent},
    {path: '**', component: NotfoundComponent}
];
