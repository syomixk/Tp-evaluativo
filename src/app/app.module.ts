import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import{AngularFireStorageModule} from '@angular/fire/compat/storage';
import { environment } from 'src/environments/environment';
import { PedidoComponent } from './modules/carrito/components/pedido/pedido.component';


@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireStorageModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
