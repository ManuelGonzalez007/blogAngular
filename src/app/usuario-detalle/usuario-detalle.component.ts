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
  todos: any
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

  obtenerUsuario() {
    if (this.id !== null) {
      this.servicio.obtenerUsuario(this.id).subscribe(data => {
        console.log(data)
        this.usuario = data
      })
    }
  }

  obtenerTODOs() {
    this.posteos = []
    this.albumes = []
    if (this.id !== null) {
      this.servicio.obtenerTODOs(this.id).subscribe(data => {
        console.log(data)
        this.todos = data
      })
    }
  }

  obtenerPosteosDeUsuario() {
    this.todos = []
    this.albumes = []
    if (this.id !== null) {
      this.servicio.obtenerPosteosDeUsuario(this.id).subscribe(data => {
        console.log(data)
        this.posteos = data
      })
    }
  }

  obtenerAlbumesDeUsuario() {
    this.posteos = []
    this.todos = []
    if (this.id !== null) {
      this.servicio.obtenerAlbumesDeUsuario(this.id).subscribe(data => {
        console.log(data)
        this.albumes = data
      })
    }
  }

  actualizarTodo(todo: Blog) {
    this.servicio.actualizarTodo(todo.id,!todo.completed).subscribe(data => {  
      console.log(data)
      todo.completed = data.completed
    })
  }
}
