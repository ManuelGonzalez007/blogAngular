import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'modelo/modelo';
import { BlogService } from 'servicio/blog.service';

@Component({
  selector: 'app-album-detalle',
  templateUrl: './album-detalle.component.html',
  styleUrls: ['./album-detalle.component.css']
})
export class AlbumDetalleComponent implements OnInit {
  @ViewChild("myElem") MyProp!: ElementRef;
  id: number | null;
  fotos: Blog[] = [];
  usuario: Blog | null
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
    this.obtenerAlbumesDeUsuario()
  }

  obtenerAlbumesDeUsuario() {
    if (this.id !== null) {
      this.servicio.obtenerAlbumesDeUsuario(this.id).subscribe(data => {
        console.log(data)
        this.albumes = data
      })
    }
  }

  obtenerImagenes(imagenes: Blog) {
    this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "start" });
    if (this.id !== null) {
      this.servicio.obtenerImagenes(imagenes.id).subscribe(data => {
        console.log(data)
        this.fotos = data
      })
    }
  }

  agrandarImagen(target: any) {
    console.log(target)
    target.path[0].style = "width: 200px"

    setTimeout(() => {
      target.path[0].style = "width: 150px"
    }, 1000);

  }

  borrarImagen(imagen: Blog) {
    let index = this.fotos.indexOf(imagen);
    this.fotos.splice(index, 1);
  }

  obtenerUsuario() {
    if (this.id !== null) {
      this.servicio.obtenerUsuario(this.id).subscribe(data => {
        console.log(data)
        this.usuario = data
      })
    }
  }
}
