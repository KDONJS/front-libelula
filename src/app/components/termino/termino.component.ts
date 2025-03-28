import { Component, OnInit } from '@angular/core';
import { PocketbaseService } from '../../services/pocketbase.service';
import { NgFor } from '@angular/common';

interface Termino {
  titulo: string;
  detalle: string;
}

@Component({
  selector: 'app-termino',
  standalone: true,
  imports: [NgFor],
  templateUrl: './termino.component.html',
  styleUrls: ['./termino.component.css']
})
export class TerminoComponent implements OnInit {
  terminos: Termino[] = [];

  constructor(private pocketBaseService: PocketbaseService) {}

  ngOnInit() {
    this.getTerminos();
  }

  private async getTerminos() {
    try {
      this.terminos = await this.pocketBaseService.getCollection('terminos_condiciones');
    } catch (error) {
      console.error('Error al obtener términos y condiciones:', error);
    }
  }
}
