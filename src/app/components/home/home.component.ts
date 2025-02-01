import { Component } from '@angular/core';
import { HeroComponent } from "../utils/hero/hero.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  hero = {
    "mensaje": "",
    "titulo": "Bienvenidos"
  }
}
