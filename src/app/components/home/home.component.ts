import { Component, OnInit, OnDestroy, NgZone, ChangeDetectorRef } from '@angular/core';
import { HeroComponent } from "../utils/hero/hero.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { PocketbaseService } from '../../services/pocketbase.service';



interface comentario{
  collectionId: string,
  collectionName: string,
  id: string,
  autor: string,
  comentario: string,
  fecha: Date,
  estrellas: Number,
  pais: string,
  created: string,
  updated: string
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  currentIndex: number = 0;
  autoplayInterval: any;
  collectionName: string = 'comentarios_estadia';
  comentarios: comentario[] = [];
  estrellas: number = 0;

  hero = {
    "mensaje": "",
    "titulo": "Bienvenidos"
  };

  constructor(
    private ngZone: NgZone, 
    private cdr: ChangeDetectorRef,
    private pocketBaseService: PocketbaseService
  ) {}

  ngOnInit() {
    this.getComentariosData();
  }

  private getComentariosData(): void {
    this.pocketBaseService.getCollection(this.collectionName).subscribe({
      next: (response) => {
        this.comentarios = response.items as comentario[];
        this.estrellas = this.comentarios.reduce((acc, item) => acc + Number(item.estrellas), 0) / this.comentarios.length;
        this.startAutoplay();
      }
    });
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.ngZone.runOutsideAngular(() => {
      this.autoplayInterval = setInterval(() => {
        this.ngZone.run(() => {
          this.nextComment();
          this.cdr.markForCheck();
        });
      }, 3000);
    });
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  prevComment() {
    this.currentIndex = (this.currentIndex - 1 + this.comentarios.length) % this.comentarios.length;
  }

  nextComment() {
    this.currentIndex = (this.currentIndex + 1) % this.comentarios.length;
  }
}
