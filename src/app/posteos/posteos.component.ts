import { Component, ElementRef, OnInit } from '@angular/core';
import { Blog } from 'modelo/modelo';
import { BlogService } from 'servicio/blog.service';

@Component({
  selector: 'app-posteos',
  templateUrl: './posteos.component.html',
  styleUrls: ['./posteos.component.css']
})
export class PosteosComponent implements OnInit {
  usuarios: Blog[] = []
  posteos: Blog[] = []

  constructor(private elementRef: ElementRef, private servicio: BlogService ) { }

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

  obtenerPosteos() {
    this.servicio.obtenerPosteos().subscribe(data => {
      this.posteos = data
      console.log(data) 
    }) 
}


}
