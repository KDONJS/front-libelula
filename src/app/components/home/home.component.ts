import { Component, OnInit, OnDestroy, NgZone, ChangeDetectorRef } from '@angular/core';
import { HeroComponent } from "../utils/hero/hero.component";
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common';
import { PocketbaseService } from '../../services/pocketbase.service';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { RatingModule } from 'primeng/rating';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';



interface comentario{
  collectionId: string,
  collectionName: string,
  id: string,
  autor: string,
  comentario: string,
  fecha: Date,
  estrellas: Number,
  pais: string,
  created: string,
  updated: string
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    NgFor,
    DialogModule,
    ButtonModule,
    InputTextModule,
    InputTextareaModule,
    RatingModule,
    ReactiveFormsModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {

  currentIndex: number = 0;
  autoplayInterval: any;
  collectionName: string = 'comentarios_estadia';
  comentarios: comentario[] = [];
  estrellas: number = 0;

  hero = {
    "mensaje": "",
    "titulo": "Bienvenidos"
  };


  ngOnInit() {
    this.getComentariosData();
  }

  private async getComentariosData(): Promise<void> {
    try {
      const response = await this.pocketBaseService.getCollection(this.collectionName);
      this.comentarios = response as comentario[];
      this.estrellas = this.comentarios.reduce((acc, item) => acc + Number(item.estrellas), 0) / this.comentarios.length;
      this.startAutoplay();
    } catch (error) {
      console.error('Error obteniendo comentarios:', error);
      this.comentarios = [];
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.ngZone.runOutsideAngular(() => {
      this.autoplayInterval = setInterval(() => {
        this.ngZone.run(() => {
          this.nextComment();
          this.cdr.markForCheck();
        });
      }, 10000);
    });
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  prevComment() {
    this.currentIndex = (this.currentIndex - 1 + this.comentarios.length) % this.comentarios.length;
  }

  nextComment() {
    this.currentIndex = (this.currentIndex + 1) % this.comentarios.length;
  }

  commentDialogVisible: boolean = false;
  commentForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private ngZone: NgZone, 
    private cdr: ChangeDetectorRef,
    private pocketBaseService: PocketbaseService
  ) {
    this.commentForm = this.fb.group({
      autor: ['', Validators.required],
      pais: ['', Validators.required],
      comentario: ['', Validators.required],
      estrellas: [5, Validators.required]
    });
  }

  openCommentDialog() {
    this.commentDialogVisible = true;
  }

  onSubmitComment() {
    if (this.commentForm.valid) {
      const formData = {
        ...this.commentForm.value,
        fecha: new Date().toISOString()
      };

      this.pocketBaseService.createRecord(this.collectionName, formData).subscribe({
        next: (response) => {
          // Add the new comment to the list and reset form
          this.comentarios.push(response);
          this.commentForm.reset();
          this.commentDialogVisible = false;
          
          // Recalculate average stars
          this.estrellas = this.comentarios.reduce((acc, item) => 
            acc + Number(item.estrellas), 0) / this.comentarios.length;
        },
        error: (error) => {
          console.error('Error al guardar el comentario:', error);
          // Here you could add error handling UI feedback
        }
      });
    }
  }
}
