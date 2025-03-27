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
  imagen: string;
  updated: string;
  imagenUrl?: string; 
}

@Component({
  selector: 'app-hospitalidad',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './hospitalidad.component.html',
  styleUrl: './hospitalidad.component.css'
})
export class HospitalidadComponent {
  titulo: string = 'ubicacion';
  collectionName: string = 'razones';

  razones?: Razones | null = null;

  constructor(private pocketBaseService: PocketbaseService) {}

  ngOnInit(): void {
    this.getHeroData();
  }

  private async getHeroData(): Promise<void> {
    try {
      const response = await this.pocketBaseService.getCollection(this.collectionName);
      const resultado = response.find((item: Razones) => item.name === this.titulo);

      if (resultado) {
        resultado.imagenUrl = this.pocketBaseService.getFileUrl(resultado, resultado.imagen);
      }

      this.razones = resultado || null;
    } catch (error) {
      console.error('Error obteniendo datos:', error);
      this.razones = null;
    }
  }
}
