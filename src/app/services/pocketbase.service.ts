import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import PocketBase from 'pocketbase';

@Injectable({
  providedIn: 'root'
})
export class PocketbaseService {
  private apiUrl = 'https://admin.libelulahotel.com.pe/api/collections';
  private pb: PocketBase;

  constructor(
    private http: HttpClient
  ) {
    this.pb = new PocketBase('https://admin.libelulahotel.com.pe');
  }

  /**
   * Obtiene todos los registros de una colección de PocketBase.
   * @param collectionName Nombre de la colección en PocketBase
   * @returns Observable con los datos de la colección
   */
  async getCollection(collectionName: string): Promise<any[]> {
    return await this.pb.collection(collectionName).getFullList();
  }

  getFileUrl(record: any, filename: string): string {
    return this.pb.files.getUrl(record, filename);
  }

    // Nuevo método para obtener un registro específico por ID
    getRecordById(collectionName: string, id: string): Observable<any> {
      const url = `${this.apiUrl}/${collectionName}/records/${id}`;
      return this.http.get(url);
    }

  createRecord(collectionName: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${collectionName}/records`;
    return this.http.post(url, data);
  }

  updateRecord(collectionName: string, id: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${collectionName}/records/${id}`;
    return this.http.patch(url, data);
  }
}
