import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface Country {
  name: string;
  fifa: string;
  flag: string;
}

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private apiUrl = 'https://restcountries.com/v3.1/all';
  private maxNameLength = 50; // Longitud máxima permitida para el nombre del país

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((countries) =>
        countries
          .filter((country) => country.name.common.length <= this.maxNameLength)
          .map((country) => ({
            name: country.name.common,
            region: country.region || 'N/A',
            fifa: country.fifa || 'N/A',
            flag: country.flags?.png || 'N/A',
          }))
      ),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = 'Ocurrió un error desconocido';

    // Verifica si ErrorEvent está definido y si el error es una instancia de ErrorEvent
    if (typeof ErrorEvent !== 'undefined' && error.error instanceof ErrorEvent) {
      // Error del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Error del lado del servidor
      errorMessage = `Código de error: ${error.status}\nMensaje: ${error.message}`;
    }

    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
