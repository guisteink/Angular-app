import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Enterprise } from '../interfaces/enterprise'
import { Observable } from 'rxjs/internal/Observable';
import { Client } from '../interfaces/client';

@Injectable({
  providedIn: 'root'
})
export class EnterpriseService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) { }

  //ok
  getAll(): Observable<Enterprise[]> {
    return this.http.get<Enterprise[]>(`${this.apiUrl}/enterprise/all`)
  }

  //ok
  getById(id: String): Observable<Enterprise> {
    return this.http.get<Enterprise>(`${this.apiUrl}/enterprise/${id}`)
  }

  //ok
  getByName(name: String) {
    return this.http.get(`${this.apiUrl}/enterprise/name/${name}`)
  }

  //ok
  getTotalsByEnterprise(id: String) {
    return this.http.get(`${this.apiUrl}/enterprise/${id}/totals`)
   }

  //ok
  getEnterprisesByCompany(id: String, name: String) {
    return this.http.get(`${this.apiUrl}/${id}/enterprise/name/${name}`)
  }
}
