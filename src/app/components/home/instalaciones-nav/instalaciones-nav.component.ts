import { Component } from '@angular/core';
import { PocketbaseService } from '../../../services/pocketbase.service';
import { CommonModule } from '@angular/common';

interface Razones {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  name: string;
  titulo: string;
  contenido: string;
  imagen: number;
  updated: string;
}

@Component({
  selector: 'app-instalaciones-nav',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './instalaciones-nav.component.html',
  styleUrl: './instalaciones-nav.component.css'
})
export class InstalacionesNavComponent {
  titulo: string = 'instalaciones';
  collectionName: string = 'razones';

  razones?: Razones | null = null;

  constructor(private pocketBaseService: PocketbaseService) {}

  ngOnInit(): void {
    this.getHeroData();
  }

  private getHeroData(): void {
    this.pocketBaseService.getCollection(this.collectionName).subscribe({
      next: (response) => {
        this.razones = response.items.find(
          (item: Razones) => item.name === this.titulo
        ) || null; // Si no encuentra nada, asigna `null`
      },
      error: (error) => {
        console.error('Error obteniendo datos:', error);
        this.razones = null; // Manejar el error y evitar undefined
      },
    });
  }
}
