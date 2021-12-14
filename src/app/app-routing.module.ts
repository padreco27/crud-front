import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { HomeComponent } from './components/views/home/home.component';
import { LivrosReadAllComponent } from './components/views/livros/livros-read-all/livros-read-all.component';
import { LivrosCreateAllComponent } from './components/views/livros/livros-create-all/livros-create-all.component';
import { LivrosUpdateAllComponent } from './components/views/livros/livros-update-all/livros-update-all.component';
import { LivrosDeleteAllComponent } from './components/views/livros/livros-delete-all/livros-delete-all.component';


const routes: Routes = [
  {path:'',
component: HomeComponent },
{
  path:'categorias',
  component: CategoriaCreateComponent
},
{
  path: 'categorias/create',
  component: CategoriaReadComponent
},
{
  path: 'categorias/delete/:id',
  component: CategoriaDeleteComponent
},
{
  path: 'categorias/update/:id',
  component: CategoriaUpdateComponent
},
{
  path: 'categorias/:id_cat/livros',
  component: LivrosReadAllComponent
},
{
  path: 'categorias/:id_cat/livros/create',
  component: LivrosCreateAllComponent
},
{
  path: 'categorias/:id_cat/livros/:id/update',
  component: LivrosUpdateAllComponent
},
{
  path: 'categorias/:id_cat/livros/:id/delete',
  component: LivrosDeleteAllComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],



exports: [RouterModule]
})
export class AppRoutingModule { }
