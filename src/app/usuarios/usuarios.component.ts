import { Component, ElementRef, OnInit } from '@angular/core';
import { Blog } from 'modelo/modelo';
import { BlogService } from 'servicio/blog.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
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
      console.log(data)
      this.usuarios = data
    })
  }
}
