import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { IniciarSesionComponent } from './iniciar sesion/iniciar-sesion.component';

const routes: Routes = [
{

path:"registro",component:RegistroComponent
},

{

  path:"inicio-sesion",component:IniciarSesionComponent

}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutentificacionRoutingModule { }
