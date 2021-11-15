import { Component, OnInit } from '@angular/core';
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

  constructor(private service: CategoriaService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    
    this.service.findAll().subscribe((resposta)=> {
      console.log(resposta);
      this.categorias = resposta;
    })
    
  }

}
