import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CountriesService } from '../../services/countries.service';

interface Country {
  name: string;
  fifa: string;
  flag: string;
}

@Component({
  selector: 'app-contactanos',
  standalone: true,
  imports: [
    HttpClientModule,
    CommonModule
  ],
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent implements OnInit {
  countries: Country[] = [];
  errorMessage: string | null = null;

  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.loadCountries();
  }

  loadCountries() {
    this.countriesService.getCountries().subscribe({
      next: (data) => {
        this.countries = data;
      },
      error: (error) => {
        this.errorMessage = error.message;
        console.error('Error al obtener los países:', error);
      },
    });
  }
}
