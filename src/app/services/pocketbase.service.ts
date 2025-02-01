import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PocketbaseService {
  private apiUrl = 'https://admin.libelulahotel.com.pe/api/collections';


  constructor(private http: HttpClient) {}

  /**
   * Obtiene todos los registros de una colección de PocketBase.
   * @param collectionName Nombre de la colección en PocketBase
   * @returns Observable con los datos de la colección
   */
  getCollection(collectionName: string): Observable<any> {
    const url = `${this.apiUrl}/${collectionName}/records`;

    return this.http.get(url);
  }

    // Nuevo método para obtener un registro específico por ID
    getRecordById(collectionName: string, id: string): Observable<any> {
      const url = `${this.apiUrl}/${collectionName}/records/${id}`;
      return this.http.get(url);
    }
}
