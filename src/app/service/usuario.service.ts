import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
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
    return this.httpClient.get(this.BASE_URL+this.USUARIO_PATH)
  }

  buscar(id: number): Observable<any> {
    return this.httpClient.get(this.BASE_URL+this.USUARIO_PATH+'/'+id)
  }

  cadastrar(usuario: Usuario): Observable<any> {
    return this.httpClient.post(this.BASE_URL+this.USUARIO_PATH, usuario)
  }

  remover(id: number): Observable<any> {
    return this.httpClient.delete(this.BASE_URL+this.USUARIO_PATH+'/'+id)
  }
  
}
