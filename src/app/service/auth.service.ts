import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Usuario } from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  private readonly USUARIO_LOGADO = 'USUARIO_LOGADO';
  BASE_URL = environment.apiURL
  PATH = 'signin'

  private autenticado = new BehaviorSubject<boolean>(localStorage.getItem(this.JWT_TOKEN) != null);
  autenticado$ = this.autenticado.asObservable();
  
  private usuarioLogado = new BehaviorSubject<Usuario>({} as Usuario);
  usuarioLogado$ = this.usuarioLogado.asObservable();

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { 
    const usuario = localStorage.getItem(this.USUARIO_LOGADO);
    if (usuario) {
      this.usuarioLogado.next(JSON.parse(usuario));
    }
    
  }

  getUsuarioLogado(): any {
    const usuario = localStorage.getItem(this.USUARIO_LOGADO);
    if (usuario) {
      return JSON.parse(usuario) as Usuario;
    } return null;
  }

  login(login: string, password: string) {
    return this.httpClient.post<any>(this.BASE_URL+this.PATH, { login, password })
      .subscribe(response => {
        localStorage.setItem(this.JWT_TOKEN, response.token);
        localStorage.setItem(this.USUARIO_LOGADO, JSON.stringify(response.usuarioDTO))
        this.usuarioLogado.next(response.usuarioDTO);
        this.autenticado.next(true);
        this.router.navigate(['']);
      });
  }

  logout() {
    localStorage.removeItem(this.JWT_TOKEN);
    localStorage.removeItem(this.USUARIO_LOGADO);
    this.usuarioLogado.next({} as Usuario);
    this.router.navigate(['/login']);
  }
  

  isLogado(): boolean {
    return this.autenticado.value;
  }

}

