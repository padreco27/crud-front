import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { HomeComponent } from './components/views/home/home.component';


const routes: Routes = [
  {path:'',
component: HomeComponent },
{
  path:'categorias',
  component: CategoriaCreateComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})
export class AppRoutingModule { }
