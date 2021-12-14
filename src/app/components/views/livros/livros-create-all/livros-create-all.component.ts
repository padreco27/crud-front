import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Livro } from '../livro.modal';
import { LivrosService } from '../livros.service';

@Component({
  selector: 'app-livros-create-all',
  templateUrl: './livros-create-all.component.html',
  styleUrls: ['./livros-create-all.component.css']
})
export class LivrosCreateAllComponent implements OnInit {
  id_cat: String = "";

  livro: Livro = {
    id: "",
    titulo: "",
    nome_autor: "",
    texto: "",
  };

  titulo = new FormControl("", [Validators.minLength(3)]);
  nome_autor = new FormControl("", [Validators.minLength(3)]);
  texto = new FormControl("", [Validators.minLength(10)]);

  constructor(
    private service: LivrosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get("id_cat")!;
  }

  create(): void {
    this.service.create(this.livro, this.id_cat).subscribe((resposta) => {
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem("Livro criado com sucesso!");
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/livros`]);
      this.service.mensagem("Erro ao criar novo livro! Tente mais tarde!");
    });
  }

  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/livros`]);
  }

  getMessage() {
    if (this.titulo.invalid) {
      return "O campo TITULO deve conter entre 3 e 100 carateres";
    }

    if (this.nome_autor.invalid) {
      return "O campo NOME DO AUTOR deve conter entre 3 e 100 carateres";
    }

    if (this.texto.invalid) {
      return "O campo TEXTO deve conter entre 10 e 2.000.000 carateres";
    }

    return false;
  }
}