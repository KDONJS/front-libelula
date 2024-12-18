import { Component } from '@angular/core';
import { HeroComponent } from "../utils/hero/hero.component";
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    MatTabsModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  hero = {
    "mensaje": "Reserva tu estancia y disfruta del lujo redefinido a las tarifas más asequibles.",
    "titulo": "Bienvenidos"
  }
}
