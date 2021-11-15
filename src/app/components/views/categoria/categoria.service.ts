import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.modal';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';



@Injectable({
  providedIn: 'root'
})


  export class CategoriaService {

    baseUrl: String = environment.baseUrl;
  
    constructor(private http: HttpClient) { }
  
    findAll():Observable<Categoria> {
      const url = `${this.baseUrl}/categorias`
      return this.http.get<Categoria>(url)
    }
  }

