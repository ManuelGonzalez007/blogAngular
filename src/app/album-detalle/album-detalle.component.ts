import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'modelo/modelo';
import { BlogService } from 'servicio/blog.service';

@Component({
  selector: 'app-album-detalle',
  templateUrl: './album-detalle.component.html',
  styleUrls: ['./album-detalle.component.css']
})
export class AlbumDetalleComponent implements OnInit {
  id: number | null;
  album: Blog | null;
  fotos: Blog[] = [];

  constructor(private elementRef: ElementRef,  private aRouter: ActivatedRoute,
    private servicio: BlogService) { 
    this.id = Number(this.aRouter.snapshot.paramMap.get("id"))
    this.album = null
    
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body
      .style.backgroundColor = 'black';
  }

  ngOnInit(): void {
    this.obtenerAlbum()
  }

  obtenerAlbum(){
    if (this.id !== null) {
    this.servicio.obtenerPosteo(this.id).subscribe(data => {
      console.log(data)
      this.album = data
    })
  }
  }

  obtenerImagenes(){
    if (this.id !== null) {
    this.servicio.obtenerImagenes(this.id).subscribe(data => {
      console.log(data)
      this.fotos = data
    })
  }
  }

  agrandarImagen(imagen: Blog) { 
    
    let index = this.fotos.indexOf(imagen);
    this.fotos[index].thumbnailUrl = this.fotos[index].url
    setTimeout(() => {

      this.achicarImagen(imagen)
      console.log("time")
      
    }, 1000);

  }

  achicarImagen(imagen: Blog) {         
    let index = this.fotos.indexOf(imagen);
    this.fotos[index].thumbnailUrl =   this.fotos[index].thumbnailUrl

  }

  borrarImagen(imagen: Blog) {
    let index = this.fotos.indexOf(imagen);
    this.fotos.splice(index, 1);
  }

}
