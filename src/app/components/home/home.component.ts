import { Component } from '@angular/core';
import { HeroComponent } from "../utils/hero/hero.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  hero = {
    "mensaje": "Reserva tu estancia y disfruta del lujo redefinido a las tarifas más asequibles.",
    "titulo": "home"
  }
}
