import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'modelo/modelo';
import { BlogService } from 'servicio/blog.service';

@Component({
  selector: 'app-posteo-detalle',
  templateUrl: './posteo-detalle.component.html',
  styleUrls: ['./posteo-detalle.component.css']
})
export class PosteoDetalleComponent implements OnInit {
  id: number | null;
  posteo: Blog | null;
  comentarioNombre: Blog[] = []
  comentarioEmail: Blog[] = []
  comentarioBody: Blog[] = []
  usuario: Blog | null
  posteos: Blog[] = []


  constructor(private elementRef: ElementRef, private aRouter: ActivatedRoute,
    private servicio: BlogService) {
    this.id = Number(this.aRouter.snapshot.paramMap.get("id"))
    this.posteo = null
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
  /*
    obtenerComentario(){
      if (this.id !== null) {
      this.servicio.obtenerComentario(this.id).subscribe(data => {
        console.log("comentario: ",data)
        this.comentario = data
      })
    }
    }
  */
  obtenerUsuario() {
    if (this.id !== null) {
      this.servicio.obtenerUsuario(this.id).subscribe(data => {
        console.log(data)
        this.usuario = data
      })
    }
  }

  obtenerComentarios(comentario: Blog) {
    window.scrollTo( 0, 1000 );
    this.servicio.obtenerComentarios(comentario.id).subscribe(data => {
      this.comentarioEmail = data
      console.log(data)
      /*
      let array = Object.values(data)
      for (let i = 0; i < array.length; i++) {
        this.comentarioNombre.push(data.name)
        this.comentarioEmail.push(data.email)
        this.comentarioBody.push(data.body)
        break
      }
    })
    
    


  }
*/
})}
}
