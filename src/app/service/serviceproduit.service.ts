import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { product } from '../model/produits.model';
const baseUrl = 'http://localhost:8070/produits';

@Injectable({
  providedIn: 'root'
})
export class ServiceproduitService {

  constructor(private http: HttpClient) {}

    getAll(): Observable<product[]> {
      return this.http.get<product[]>(`${baseUrl}/getall`);
    }
    getById(id: any): Observable<any> {
      return this.http.get(`${baseUrl}/${id}`);
    }
    save(data: any): Observable<any> {
      return this.http.post(baseUrl+"/create", data);
    }
    update(data: any): Observable<any> {
      return this.http.post(baseUrl+"/updateproduit/"+data.id, data);
    }
    delete(id: any): Observable<any> { 
      return this.http.delete(`${baseUrl}/delete/${id}`);
    }
   }

