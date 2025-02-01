import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PocketbaseService } from '../../../services/pocketbase.service';
import { GalleriaModule } from 'primeng/galleria';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-paginadescriptiva',
  standalone: true,
  imports: [
    GalleriaModule,
    ButtonModule
  ],
  templateUrl: './paginadescriptiva.component.html',
  styleUrls: ['./paginadescriptiva.component.css']
})
export class PaginadescriptivaComponent implements OnInit {
  id: string = '';
  habitacion: any;
  imagenes: string[] = [];
  currentIndex: number = 0;
  descripcionItems: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private pocketBaseService: PocketbaseService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getHabitacionData();
  }

  private getHabitacionData(): void {
    this.pocketBaseService.getRecordById('habitaciones', this.id).subscribe({
      next: (response) => {
        this.habitacion = response;
        this.imagenes = this.habitacion.imagenes.map((imagen: string) =>
          `https://admin.libelulahotel.com.pe/api/files/${this.habitacion.collectionId}/${this.habitacion.id}/${imagen}`
        );

        if (this.habitacion.description) {
          this.descripcionItems = this.habitacion.description.split(',').map((item: string) => item.trim());
        }
      },
      error: (error) => {
        console.error('Error obteniendo datos de la habitación:', error);
      },
    });
  }

  prevImage(): void {
    this.currentIndex = (this.currentIndex === 0) ? this.imagenes.length - 1 : this.currentIndex - 1;
  }

  nextImage(): void {
    this.currentIndex = (this.currentIndex === this.imagenes.length - 1) ? 0 : this.currentIndex + 1;
  }
}
