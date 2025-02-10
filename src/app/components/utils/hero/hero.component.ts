import { Component,  Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PocketbaseService } from '../../../services/pocketbase.service';

interface HeroItem {
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  image: string;
  mensaje_bienvenida: string;
  name_pagina: string;
  numero_reserva: number;
  updated: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})


export class HeroComponent implements OnInit{
  @Input() titulo!: string;
  @Input() mensaje!: string;
  @Input() collectionName: string = 'table_hero';

  heroItem?: HeroItem | null = null;
  whatsappLink: string = '';

  constructor(private pocketBaseService: PocketbaseService) {}

  ngOnInit(): void {
    this.getHeroData();
  }

  private getHeroData(): void {
    this.pocketBaseService.getCollection(this.collectionName).subscribe({
      next: (response) => {
        this.heroItem = response.items.find(
          (item: HeroItem) => item.name_pagina === this.titulo
        ) || null;

        if (this.heroItem?.numero_reserva) {
          this.generarWhatsAppLink(this.heroItem.numero_reserva);
        }
      },
      error: (error) => {
        console.error('Error obteniendo datos:', error);
        this.heroItem = null;
      },
    });
  }

  private generarWhatsAppLink(numero: number): void {
    const mensaje = encodeURIComponent(
      `¡Hola! Estoy interesado en reservar una habitación en Libélula Hotel. ¿Podrías brindarme más información?`
    );
    this.whatsappLink = `https://wa.me/${numero}?text=${mensaje}`;
  }

}
