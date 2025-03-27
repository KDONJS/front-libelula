import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PocketbaseService } from '../../services/pocketbase.service';
import { CommonModule } from '@angular/common';

interface social{
  collectionId: string;
  collectionName: string;
  created: string;
  id: string;
  red_social: string;
  link: string;
  icon: string;
  updated: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  collectionName: string = 'redes_sociales';

  redsocial: social[] = [];

  constructor(private pocketBaseService: PocketbaseService) {}

  ngOnInit(): void {
    this.getSocialData();
  }

  private async getSocialData(): Promise<void> {
    try {
      const response = await this.pocketBaseService.getCollection(this.collectionName);
      this.redsocial = response as social[];
    } catch (error) {
      console.error('Error obteniendo datos:', error);
      this.redsocial = [];
    }
  }

}
