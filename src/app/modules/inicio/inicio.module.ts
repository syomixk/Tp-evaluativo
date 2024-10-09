import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CardComponent } from './components/card/card.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';

//Son los componentes especificos que tienen conmo objetivo mostrar los diferentes componentes
import { InicioComponent } from './pages/inicio/inicio.component';


@NgModule({
  declarations: [
    CardComponent,
    CarrouselComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule
  ],
  exports: [
    CardComponent,
    CarrouselComponent,
    InicioComponent
  ]
})
export class InicioModule { }
