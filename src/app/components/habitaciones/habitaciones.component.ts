import { Component } from '@angular/core';
import { HeroComponent } from '../utils/hero/hero.component';
import { PocketbaseService } from '../../services/pocketbase.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Habitacion {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  imagenes: string[];
  description: string;
  numero_celular: string;
  tipo: number;
  updated: string;
  imagenUrl?: string;
}

interface Pagina {
  page: string;
  resumen: string;
  id: string;
  created: string;
  updated: string;
}

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [HeroComponent, CommonModule, RouterLink],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {
  hero = {
    "mensaje": "",
    "titulo": "Habitaciones"
  }

  collectionName: string = 'habitaciones';
  paginasCollection: string = 'paginas';
  habitaciones: Habitacion[] = [];
  paginaData: Pagina | null = null;

  constructor(private pocketBaseService: PocketbaseService) {}

  ngOnInit(): void {
    this.getHabitacionesData();
    this.getPaginaData();
  }

  private async getHabitacionesData(): Promise<void> {
    try {
      const response = await this.pocketBaseService.getCollection(this.collectionName);
      this.habitaciones = response.map((item: Habitacion) => ({
        ...item,
        imagenUrl: item.imagenes?.length
        ? this.pocketBaseService.getFileUrl(item, item.imagenes[0])
        : undefined
      }));
    } catch (error) {
      console.error('Error obteniendo habitaciones:', error);
      this.habitaciones = [];
    }
  }

  private async getPaginaData(): Promise<void> {
    try {
      const response = await this.pocketBaseService.getCollection(this.paginasCollection);
      // Filter for page with "habitaciones" value
      const habitacionesPage = response.find((item: Pagina) => item.page === "habitaciones");
      if (habitacionesPage) {
        this.paginaData = habitacionesPage;
        this.hero.mensaje = habitacionesPage.resumen; // Update hero message with page resumen
      }
    } catch (error) {
      console.error('Error obteniendo datos de página:', error);
      this.paginaData = null;
    }
  }
}
