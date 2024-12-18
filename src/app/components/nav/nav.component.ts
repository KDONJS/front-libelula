import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  animations: [
    trigger('menuAnimation', [
      state('closed', style({
        transform: 'translateX(100%)', // Menú fuera de la pantalla
        opacity: 0,
      })),
      state('open', style({
        transform: 'translateX(0)', // Menú completamente visible
        opacity: 1,
      })),
      transition('closed => open', [
        animate('0.4s ease-out') // Suavidad al abrir
      ]),
      transition('open => closed', [
        animate('0.4s ease-in') // Suavidad al cerrar
      ]),
    ]),
  ]
})
export class NavComponent {
  menuVisible = false;

  get menuState() {
    return this.menuVisible ? 'open' : 'closed';
  }

  toggleMenu() {
    this.menuVisible = !this.menuVisible;
  }

  closeMenu() {
    this.menuVisible = false;
  }

}
