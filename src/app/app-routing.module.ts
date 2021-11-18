import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumDetalleComponent } from './album-detalle/album-detalle.component';
import { AlbumesComponent } from './albumes/albumes.component';
import { HomeComponent } from './home/home.component';
import { PosteoDetalleComponent } from './posteo-detalle/posteo-detalle.component';
import { PosteosComponent } from './posteos/posteos.component';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [

  {path:"", component: HomeComponent},
  {path:"usuarios", component: UsuariosComponent},
  {path:"posteos", component: PosteosComponent},
  {path:"albumes", component: AlbumesComponent},
  {path:"usuarioDetalle/:id", component: UsuarioDetalleComponent},
  {path:"posteoDetalle/:id", component: PosteoDetalleComponent},
  {path:"albumDetalle/:id", component: AlbumDetalleComponent},
  {path:"**", redirectTo:"", pathMatch:"full"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
