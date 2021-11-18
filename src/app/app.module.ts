import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PosteosComponent } from './posteos/posteos.component';
import { AlbumesComponent } from './albumes/albumes.component';
import { HomeComponent } from './home/home.component';
import{ HttpClientModule } from '@angular/common/http';
import { UsuarioDetalleComponent } from './usuario-detalle/usuario-detalle.component';
import { PosteoDetalleComponent } from './posteo-detalle/posteo-detalle.component';
import { AlbumDetalleComponent } from './album-detalle/album-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuariosComponent,
    PosteosComponent,
    AlbumesComponent,
    HomeComponent,
    UsuarioDetalleComponent,
    PosteoDetalleComponent,
    AlbumDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
