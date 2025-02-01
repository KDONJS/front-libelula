import { Component } from '@angular/core';
import { HeroComponent } from '../utils/hero/hero.component';
import { PocketbaseService } from '../../services/pocketbase.service';
import { CommonModule } from '@angular/common';

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
}

@Component({
  selector: 'app-habitaciones',
  standalone: true,
  imports: [
    HeroComponent,
    CommonModule
  ],
  templateUrl: './habitaciones.component.html',
  styleUrl: './habitaciones.component.css'
})
export class HabitacionesComponent {
  hero = {
    "mensaje": "",
    "titulo": "Habitaciones"
  }

  collectionName: string = 'habitaciones';

  habitaciones: Habitacion[] = []; // Inicializar como un array vacío

  constructor(private pocketBaseService: PocketbaseService) {}

  ngOnInit(): void {
    this.getHeroData();
  }

  private getHeroData(): void {
    this.pocketBaseService.getCollection(this.collectionName).subscribe({
      next: (response) => {
        this.habitaciones = response.items as Habitacion[]; // Asegurar el tipo correcto
      },
      error: (error) => {
        console.error('Error obteniendo datos:', error);
        this.habitaciones = [];
      },
    });
  }

}
