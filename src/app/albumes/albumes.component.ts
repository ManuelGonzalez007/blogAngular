import { Component, ElementRef, OnInit } from '@angular/core';
import { Blog } from 'modelo/modelo';
import { BlogService } from 'servicio/blog.service';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {
  albumes: Blog[] = []

  constructor(private elementRef: ElementRef, private servicio: BlogService) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body
      .style.backgroundColor = 'black';
  }

  ngOnInit(): void {
    this.obtenerAlbumes()
  }

  obtenerAlbumes(){
    this.servicio.obtenerAlbumes().subscribe(data => {
      this.albumes= data
      console.log(data) 
    })
  }

}
