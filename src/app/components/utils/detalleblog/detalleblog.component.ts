import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PocketbaseService } from '../../../services/pocketbase.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-detalleblog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './detalleblog.component.html',
  styleUrl: './detalleblog.component.css'
})
export class DetalleblogComponent implements OnInit {
  id: string = '';
  blog: any;
  imagenUrl: string = '';
  currentUrl: string = '';
  commentForm: FormGroup;
  comments: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private pocketBaseService: PocketbaseService,
    private fb: FormBuilder
  ) {
    this.currentUrl = window.location.href;
    this.commentForm = this.fb.group({
      nombre: ['', Validators.required],
      comentario: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getBlogData();
  }

  private getBlogData(): void {
    this.pocketBaseService.getRecordById('blog', this.id).subscribe({
      next: (response) => {
        this.blog = response;
        
        // Log the raw comments data for debugging
        console.log('Raw comments:', this.blog.comentarios);
        
        // Handle comments parsing
        if (this.blog.comentarios) {
          try {
            // If it's already a string, parse it; if it's an array, use it directly
            this.comments = typeof this.blog.comentarios === 'string' 
              ? JSON.parse(this.blog.comentarios)
              : Array.isArray(this.blog.comentarios) 
                ? this.blog.comentarios 
                : [];
                
            console.log('Parsed comments:', this.comments);
          } catch (e) {
            console.error('Error parsing comments:', e);
            this.comments = [];
          }
        } else {
          this.comments = [];
        }

        // Format the text with proper paragraphs
        this.blog.cuerpo = this.blog.cuerpo.replace(/\r\n\r\n/g, '</p><p>');
        this.blog.cuerpo = '<p>' + this.blog.cuerpo + '</p>';

        // Check if imagen exists before creating URL
        if (this.blog.imagen) {
          this.imagenUrl = `https://admin.libelulahotel.com.pe/api/files/${this.blog.collectionId}/${this.blog.id}/${this.blog.imagen}`;
        } else {
          this.imagenUrl = 'assets/images/default-blog.jpg'; // Add a default image
        }
      },
      error: (error) => {
        console.error('Error obteniendo datos del blog:', error);
      },
    });
}

onSubmitComment(): void {
    if (this.commentForm.valid) {
      const newComment = {
        nombre: this.commentForm.value.nombre,
        comentario: this.commentForm.value.comentario,
        fecha: new Date().toISOString()
      };

      // Get current comments or initialize empty array
      const currentComments = Array.isArray(this.comments) ? this.comments : [];
      const updatedComments = [...currentComments, newComment];

      const updateData = {
        comentarios: JSON.stringify(updatedComments)
      };

      this.pocketBaseService.updateRecord('blog', this.id, updateData).subscribe({
        next: (response) => {
          // Update local comments
          this.comments = updatedComments;
          this.commentForm.reset();
          console.log('Updated comments:', this.comments);
        },
        error: (error) => {
          console.error('Error al guardar el comentario:', error);
        }
      });
    }
}
}