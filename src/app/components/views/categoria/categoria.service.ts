import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.modal';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';



@Injectable({
  providedIn: 'root'
})


  export class CategoriaService {

    baseUrl: String = environment.baseUrl;
  
    constructor(private http: HttpClient,
      private _snack: MatSnackBar) { }
  
    findAll():Observable<Categoria> {
      const url = `${this.baseUrl}`
      return this.http.get<Categoria>(url)
    }

    findById(id: String): Observable<Categoria> {
      const url = `${this.baseUrl}/categorias/${id}`
      return this.http.get<Categoria>(url)
    }


    delete(id: String):Observable<void> {
      const url = `${this.baseUrl}/${id}`
      return this.http.delete<void>(url)
    }

    read(categoria: Categoria): Observable<Categoria>{
      const url = `${this.baseUrl}`
      return this.http.post<Categoria>(url, categoria);
    }
  
    mensagem(str: String): void {
      this._snack.open(`${str}`, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000
      })
    }
  }

