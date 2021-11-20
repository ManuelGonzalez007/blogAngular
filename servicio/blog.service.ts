import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  url = "https://jsonplaceholder.typicode.com"

  constructor(private http: HttpClient) { }

  obtenerUsuarios(): Observable<any> {
    const path = this.url + "/users"
    return this.http.get(path)
  }

  obtenerUsuario(id: number): Observable<any> {
    const path = this.url + "/users/" + id
    return this.http.get(path)
  }

  obtenerPosteo(id: number): Observable<any> {
    const path = this.url + "/posts/" + id
    return this.http.get(path)
  }

  obtenerComentarios(id: number): Observable<any> {
    const path = this.url + "/posts/" + id + "/comments"
    return this.http.get(path)
  }

  obtenerAlbum(id: number): Observable<any> {
    const path = this.url + "/albums/" + id
    return this.http.get(path)
  }

  obtenerImagenes(id: number): Observable<any> {
    const path = this.url + "/albums/" + id + "/photos"
    return this.http.get(path)
  }

  obtenerTODOs(id: number): Observable<any> {
    const path = this.url + "/users/" + id + "/todos"
    return this.http.get(path)
  }

  obtenerPosteosDeUsuario(id: number): Observable<any> {
    const path = this.url + "/users/" + id + "/posts"
    return this.http.get(path)
  }

  obtenerAlbumesDeUsuario(id: number): Observable<any> {
    const path = this.url + "/users/" + id + "/albums"
    return this.http.get(path)
  }

  modificarTodo() {
    const path = this.url + "/users/todos"
    return this.http.patch(path, { "completed": true })
  }
}
