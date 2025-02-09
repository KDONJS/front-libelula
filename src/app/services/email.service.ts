import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private apiUrl = 'https://email.libelulahotel.com.pe/enviar-correo';  // URL de tu API

  constructor(private http: HttpClient) {}

  enviarCorreo(datos: any): Observable<any> {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(this.apiUrl, datos, { headers });
  }
}
