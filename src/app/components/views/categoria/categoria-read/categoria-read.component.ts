import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria.modal';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  read(): void {
    this.service.read(this.categoria).subscribe((resposta) => {
      this.router.navigate(['categorias'])
      this.service.mensagem('Categoria criada com sucesso!');
    }, err => {
      for(let i = 0; i < err.error.errors.length; i++) {
        this.service.mensagem(err.error.errors[i].message)
      }
    })
  }

  cancel(): void {
    this.router.navigate(['categorias'])
  }

}


