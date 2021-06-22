import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '../interfaces/client'

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) { }

  //ok
  getAll(): Observable<Client[]> {
    return this.http.get<Client[]>(this.apiUrl)
  }

  //rever rota
  getById(id: String): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/${id}`)
  }

  //ok
  getByName(name: String): Observable<Client> {
    return this.http.get<Client>(`${this.apiUrl}/name/${name}`)
  }

  //ok
  getTotalsByCompany(id: String) {
    return this.http.get(`${this.apiUrl}/${id}/totals`)
  }

  //ok
  getGeneralTotals(): Observable<Object> {
    return this.http.get<Object>(`${this.apiUrl}/totals`)
  }
}
