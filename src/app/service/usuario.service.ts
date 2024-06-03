import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  BASE_URL = environment.apiURL
  USUARIO_PATH = 'users'

  constructor(
    private httpClient: HttpClient
  ) { }

  listaUsuarios(): Observable<any> {
    return this.httpClient.get(this.BASE_URL+this.USUARIO_PATH, 
      { headers: { Authorization: 'Bearer '+localStorage.getItem('JWT_TOKEN') } })
  }

  buscar(id: number): Observable<any> {
    return this.httpClient.get(this.BASE_URL+this.USUARIO_PATH+'/'+id,
    { headers: { Authorization: 'Bearer '+localStorage.getItem('JWT_TOKEN') } }
    )
  }

  cadastrar(usuario: Usuario): Observable<any> {
    return this.httpClient.post(this.BASE_URL+this.USUARIO_PATH, usuario)
  }

  editar(id: number, usuario: Usuario): Observable<any> {
    return this.httpClient.put(this.BASE_URL+this.USUARIO_PATH+'/'+id, usuario,
      { headers: { Authorization: 'Bearer '+localStorage.getItem('JWT_TOKEN') } }
    )
  }

  remover(id: number): Observable<any> {
    return this.httpClient.delete(this.BASE_URL+this.USUARIO_PATH+'/'+id,
    { headers: { Authorization: 'Bearer '+localStorage.getItem('JWT_TOKEN') } }
    )
  }
  
}
