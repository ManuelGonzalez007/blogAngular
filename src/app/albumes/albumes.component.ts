import { Component, ElementRef, OnInit } from '@angular/core';
import { Blog } from 'modelo/modelo';
import { BlogService } from 'servicio/blog.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {
  usuarios: Blog[] = []

  constructor(private elementRef: ElementRef, private servicio: BlogService) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body
      .style.backgroundColor = 'black';
  }

  ngOnInit(): void {
    this.obtenerUsuarios()
  }

  obtenerUsuarios() {
    this.servicio.obtenerUsuarios().subscribe(data => {
      this.usuarios = data
      console.log(data) 
    }) 
}

}
