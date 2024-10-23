import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CardCatalogoComponent } from './components/card-catalogo/card-catalogo.component';


@NgModule({
  declarations: [
    CatalogoComponent,
    CardCatalogoComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],

  exports: [

    CatalogoComponent,
    CardCatalogoComponent,

  ]


})
export class ProductosModule {



}
