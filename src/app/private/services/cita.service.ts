import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class CitaService {
  private readonly api = config.apiUrl;

  constructor(private readonly http:HttpClient) { }
  obtenerTodos(): Observable<any> {
    return this.http.get<any>(`${this.api}citas`);
  }

  obtenerUno(id:any): Observable<any> {
    return this.http.get<any>(`${this.api}citas/${id}`);
  }
  create(body:any):Observable<any>{
    return this.http.post<any>(`${this.api}citas`,body);
  }
  update(body:any,id:any):Observable<any>{
    return this.http.put<any>(`${this.api}citas/${id}`,body);
  }
  delete(id:any):Observable<any>{
    return this.http.delete<any>(`${this.api}citas/${id}`);
  }

}
