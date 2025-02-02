import { Component } from '@angular/core';
import { HeroComponent } from "../utils/hero/hero.component";
import { PocketbaseService } from '../../services/pocketbase.service';
import { CommonModule } from '@angular/common';

interface Instalacion {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  instalacion: string;
  imagen: string;
  detalle: string;
  updated: string;
}

@Component({
  selector: 'app-instalaciones',
  standalone: true,
  imports: [
    HeroComponent,
    CommonModule
  ],
  templateUrl: './instalaciones.component.html',
  styleUrl: './instalaciones.component.css'
})
export class InstalacionesComponent {
  hero = {
    "mensaje": "",
    "titulo": "Instalaciones"
  }

  collectionName: string = 'instalaciones';

  instalaciones: Instalacion[] = []; // Inicializar como un array vacío

  constructor(private pocketBaseService: PocketbaseService) {}

  ngOnInit(): void {
    this.getHeroData();
  }

  private getHeroData(): void {
    this.pocketBaseService.getCollection(this.collectionName).subscribe({
      next: (response) => {
        this.instalaciones = response.items as Instalacion[]; // Asegurar el tipo correcto
      },
      error: (error) => {
        console.error('Error obteniendo datos:', error);
        this.instalaciones = [];
      },
    });
  }
}
