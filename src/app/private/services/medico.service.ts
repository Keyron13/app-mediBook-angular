import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {
  private readonly api = config.apiUrl;

  constructor(private readonly http:HttpClient) { }
  obtenerTodos(): Observable<any> {
    return this.http.get<any>(`${this.api}medicos`);
  }

  obtenerUno(id:any): Observable<any> {
    return this.http.get<any>(`${this.api}medicos/${id}`);
  }
  create(body:any):Observable<any>{
    return this.http.post<any>(`${this.api}medicos`,body);
  }
  update(body:any,id:any):Observable<any>{
    return this.http.put<any>(`${this.api}medicos/${id}`,body);
  }
  delete(id:any):Observable<any>{
    return this.http.delete<any>(`${this.api}medicos/${id}`);
  }
  allMedico():Observable<any>{
    return this.http.get<any>(`${this.api}medico-information`);

  }
}
