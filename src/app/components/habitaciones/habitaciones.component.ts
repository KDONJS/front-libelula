import { Component } from '@angular/core';
import { HeroComponent } from '../utils/hero/hero.component';

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [
    HeroComponent
  ],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {
  hero = {
    "mensaje": "Reserva tu estancia y disfruta del lujo redefinido a las tarifas más asequibles.",
    "titulo": "Habitaciones"
  }
}
