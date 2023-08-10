import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { config } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class ResetpasswordService {
  private readonly api = config.apiUrl;

  constructor(private readonly http:HttpClient) { }
  resetPassword(body:any,id:any): Observable<any> {
    return this.http.put<any>(`${this.api}updatePasswordAdmin/${id}`,body);
  }
}
