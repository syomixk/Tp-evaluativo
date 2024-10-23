import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { TableComponent } from './components/table/table.component';

import { MatIconModule } from '@angular/material/icon';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    TableComponent
  ]
})
export class AdminModule { }
