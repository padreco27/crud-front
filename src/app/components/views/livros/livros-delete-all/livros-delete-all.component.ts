import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.modal';
import { LivrosService } from '../livros.service';

@Component({
  selector: 'app-livros-delete-all',
  templateUrl: './livros-delete-all.component.html',
  styleUrls: ['./livros-delete-all.component.css']
})
export class LivrosDeleteAllComponent implements OnInit {

  id_cat: String = "";

  livro: Livro = {
    id: "",
    titulo: "",
    nome_autor: "",
    texto: "",
  };

  constructor(
    private service: LivrosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
    this.livro.id = this.route.snapshot.paramMap.get("id")!;
    this.findById()
  }

  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
  }

  findById(): void {
    this.service.findById(this.livro.id!).subscribe((resposta) => {
      this.livro = resposta
    })
  }

  delete():void {
    this.service.delete(this.livro.id!).subscribe(() => {
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem('Livro deletado com sucesso!')
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem('Falha ao deletar livro! Tente mais tarde..')
    })
  }

}