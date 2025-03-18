import { Component, OnInit } from '@angular/core';
import { HeroComponent } from '../utils/hero/hero.component';
import { PocketbaseService } from '../../services/pocketbase.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Blog {
  collectionId: string;
  collectionName: string;
  id: string;
  titulo: string;
  cuerpo: string;
  resumen: string;
  imagen: string;
  comentarios: string;
  created: string;
  updated: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [
    HeroComponent,
    CommonModule,
    RouterLink
  ],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {
  hero = {
    "mensaje": "",
    "titulo": "BLog"
  };

  collectionName: string = 'blog';
  blogs: Blog[] = [];

  constructor(private pocketBaseService: PocketbaseService) {}

  ngOnInit(): void {
    this.getBlogsData();
  }

  private getBlogsData(): void {
    this.pocketBaseService.getCollection(this.collectionName).subscribe({
      next: (response) => {
        this.blogs = response.items as Blog[];
      },
      error: (error) => {
        console.error('Error fetching blog data:', error);
        this.blogs = [];
      },
    });
  }
}
