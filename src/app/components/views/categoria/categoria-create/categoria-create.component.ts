import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Categoria } from '../categoria.modal';
import { CategoriaService } from './../categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categorias: Categoria[] = [];

  displayedColumns: string[] = ["id", "nome", "descricao", "livros", "acoes"];

  constructor(private service: CategoriaService,
    private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    
    this.service.findAll().subscribe((resposta:any)=> {
      console.log(this.categorias);
      this.categorias=resposta;
    })
    
  }


  navegarParaCategoriaRead() {
    this.router.navigate(["categorias/create"])
  }

}
