import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'modelo/modelo';
import { BlogService } from 'servicio/blog.service';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {
  id: number | null;
  usuario: Blog | null
  todos: Blog[]= []
  posteos: Blog[] = []
  albumes: Blog[] = []

  constructor(private elementRef: ElementRef, private aRouter: ActivatedRoute,
    private servicio: BlogService) { 
    this.id = Number(this.aRouter.snapshot.paramMap.get("id"))
    this.usuario = null

  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body
      .style.backgroundColor = 'black';
  }

  ngOnInit(): void {
    this.obtenerUsuario()
  }

  obtenerUsuario(){
    if (this.id !== null) {
    this.servicio.obtenerUsuario(this.id).subscribe(data => {
      console.log(data)
      this.usuario = data
    })
  }
  }

  obtenerTODOs(){
    if (this.id !== null) {
      this.servicio.obtenerTODOs(this.id).subscribe(data => {
        console.log(data)
        this.todos = data
      })
    }
  }

  obtenerPosteosDeUsuario(){
    if (this.id !== null) {
      this.servicio.obtenerPosteosDeUsuario(this.id).subscribe(data => {
        console.log(data)
        this.posteos= data
      })
    }
  }

  obtenerAlbumesDeUsuario(){
    if (this.id !== null) {
      this.servicio.obtenerAlbumesDeUsuario(this.id).subscribe(data => {
        console.log(data)
        this.albumes= data
      })
    }
  }

}
