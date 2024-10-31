import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { CardCatalogoComponent } from './components/card-catalogo/card-catalogo.component';
import { CardBolsaComponent } from './components/card-bolsa/card-bolsa.component';
import { BolsasComponent } from './pages/bolsas/bolsas.component';
import { CardJeansComponent } from './components/card-jeans/card-jeans.component';
import { JeansComponent } from './pages/jeans/jeans.component';
import { CardTopsComponent } from './components/card-tops/card-tops.component';
import { TopsComponent } from './pages/tops/tops.component';
import {MatTabsModule} from '@angular/material/tabs';


@NgModule({
  declarations: [
    CatalogoComponent,
    CardCatalogoComponent,
    CardBolsaComponent,
    BolsasComponent,
    CardJeansComponent,
    JeansComponent,
    CardTopsComponent,
    TopsComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    MatTabsModule,
  ],

  exports: [

    CatalogoComponent,
    CardCatalogoComponent,
    CardBolsaComponent,
    MatTabsModule,
  ]


})
export class ProductosModule {



}
