import { Component } from '@angular/core';
import { HeroComponent } from "../utils/hero/hero.component";

@Component({
  selector: 'app-instalaciones',
  standalone: true,
  imports: [
    HeroComponent,
  ],
  templateUrl: './instalaciones.component.html',
  styleUrl: './instalaciones.component.css'
})
export class InstalacionesComponent {
  hero = {
    "mensaje": "Disfruta de nuestras instalaciones de lujo.",
    "titulo": "Instalaciones"
  }
}
