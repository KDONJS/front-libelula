import { Component } from '@angular/core';
import { HeroComponent } from '../utils/hero/hero.component';

@Component({
  selector: 'app-nosotros',
  standalone: true,
  imports: [HeroComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
  hero = {
    "mensaje": "",
    "titulo": "Nosotros"
  }
}
