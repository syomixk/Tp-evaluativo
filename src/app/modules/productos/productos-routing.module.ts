import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { BolsasComponent } from './pages/bolsas/bolsas.component';

const routes: Routes = [

{
  path:"catalogo",
  component:CatalogoComponent
},
{
  path:"bolsas",
  component:BolsasComponent
}


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
