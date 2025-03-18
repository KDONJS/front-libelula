import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PocketbaseService } from '../../../services/pocketbase.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-detalleblog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalleblog.component.html',
  styleUrl: './detalleblog.component.css'
})
export class DetalleblogComponent implements OnInit {
  id: string = '';
  blog: any;
  imagenUrl: string = '';
  currentUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private pocketBaseService: PocketbaseService
  ) {
    this.currentUrl = window.location.href;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.getBlogData();
  }

  private getBlogData(): void {
    this.pocketBaseService.getRecordById('blog', this.id).subscribe({
      next: (response) => {
        this.blog = response;
        // Format the text with proper paragraphs
        this.blog.cuerpo = this.blog.cuerpo.replace(/\r\n\r\n/g, '</p><p>');
        this.blog.cuerpo = '<p>' + this.blog.cuerpo + '</p>';
        this.imagenUrl = `https://admin.libelulahotel.com.pe/api/files/${this.blog.collectionId}/${this.blog.id}/${this.blog.imagen}`;
      },
      error: (error) => {
        console.error('Error obteniendo datos del blog:', error);
      },
    });
  }
}
