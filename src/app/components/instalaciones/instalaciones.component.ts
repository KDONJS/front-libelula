import { Component, TemplateRef, ViewChild } from '@angular/core';
import { HeroComponent } from "../utils/hero/hero.component";
import { PocketbaseService } from '../../services/pocketbase.service';
import { CommonModule } from '@angular/common';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

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
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './instalaciones.component.html',
  styleUrl: './instalaciones.component.css'
})
export class InstalacionesComponent {
  hero = {
    "mensaje": "",
    "titulo": "Instalaciones"
  }

  @ViewChild('dialogTemplate') dialogTemplate!: TemplateRef<any>;
  dialogRef!: MatDialogRef<any>;

  collectionName: string = 'instalaciones';
  instalaciones: Instalacion[] = []; // Inicializar como un array vacío
  instalacionSeleccionada: Instalacion | null = null; // Para almacenar la instalación seleccionada

  constructor(
    private pocketBaseService: PocketbaseService,
    private dialog: MatDialog
  ) {}

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

openDialog(instalacion: Instalacion) {
  this.instalacionSeleccionada = instalacion;
  this.dialogRef = this.dialog.open(this.dialogTemplate, {
    width: '500px', // Puedes ajustar el ancho del diálogo
    maxWidth: '90vw' // Ajuste para pantallas pequeñas
  });
}
  closeDialog() {
    this.dialogRef.close();
    this.instalacionSeleccionada = null; // Limpiar la instalación seleccionada al cerrar el diálogo
  }
}
