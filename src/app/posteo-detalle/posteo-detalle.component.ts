import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'modelo/modelo';
import { BlogService } from 'servicio/blog.service';

@Component({
  selector: 'app-posteo-detalle',
  templateUrl: './posteo-detalle.component.html',
  styleUrls: ['./posteo-detalle.component.css']
})
export class PosteoDetalleComponent implements OnInit {
  @ViewChild("myElem") MyProp!: ElementRef;
  id: number | null;
  comentario: Blog[] = []
  usuario: Blog | null
  posteos: Blog[] = []

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
    this.obtenerPosteosDeUsuario()
  }

  obtenerPosteosDeUsuario() {
    if (this.id !== null) {
      this.servicio.obtenerPosteosDeUsuario(this.id).subscribe(data => {
        console.log(data)
        this.posteos = data
      })
    }
  }

  obtenerUsuario() {
    if (this.id !== null) {
      this.servicio.obtenerUsuario(this.id).subscribe(data => {
        console.log(data)
        this.usuario = data
      })
    }
  }

  obtenerComentarios(comentario: Blog) {
    this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    this.servicio.obtenerComentarios(comentario.id).subscribe(data => {
      this.comentario = data
      console.log(data)
    })
  }
}
