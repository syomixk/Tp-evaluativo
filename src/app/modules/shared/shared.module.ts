import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
      MatMenuModule,
      AppRoutingModule
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    NavbarComponent,
    MatMenuModule
  ]

})
export class SharedModule { }
