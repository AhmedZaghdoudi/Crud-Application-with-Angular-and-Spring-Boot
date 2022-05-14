import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/categories.model';
const baseUrl = 'http://localhost:8070/categorie';
@Injectable({
  providedIn: 'root'
})
export class ServicecategorieService {



constructor(private http: HttpClient) { }

  getAll(): Observable<Category[]> {
    return this.http.get<Category[]>(`${baseUrl}/getall`);
  }
  getById(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }
  save(data: any): Observable<any> {
    return this.http.post(baseUrl+"/create", data);
  }
  update(data: any): Observable<any> {
    return this.http.post(baseUrl+"/updateCategorie/"+data.id, data);
  }
  delete(id: any): Observable<any> { console.log("aaa");
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }
}
