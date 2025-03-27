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
  backgroundImage: string = '';

  constructor(private pocketBaseService: PocketbaseService) {}

  ngOnInit(): void {
    this.getHeroData();
  }

  private async getHeroData(): Promise<void> {
    try {
      const response = await this.pocketBaseService.getCollection(this.collectionName);
      this.heroItem =
        response.find((item: HeroItem) => item.name_pagina === this.titulo) || null;

      if (this.heroItem) {
        this.setBackgroundImage(this.heroItem);
        if (this.heroItem.numero_reserva) {
          this.generarWhatsAppLink(this.heroItem.numero_reserva);
        }
      }
    } catch (error) {
      console.error('Error obteniendo datos:', error);
      this.heroItem = null;
    }
  }

  private setBackgroundImage(heroItem: HeroItem): void {
    const imageUrl = this.pocketBaseService.getFileUrl(heroItem, heroItem.image);
    this.backgroundImage = `linear-gradient(#14274ad2, rgba(48, 44, 58, 0.521)), url(${imageUrl})`;
  }

  private generarWhatsAppLink(numero: number): void {
    const numeroCelular = '+51'+numero
    const mensaje = encodeURIComponent(
      `¡Hola! vengo de libelulahotel.com.pe y Estoy interesado en reservar una habitación en Libélula Hotel. ¿Podrías brindarme más información?`
    );
    this.whatsappLink = `https://wa.me/${numeroCelular}?text=${mensaje}`;
  }

}
