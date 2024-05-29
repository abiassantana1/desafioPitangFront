import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly JWT_TOKEN = 'JWT_TOKEN';
  BASE_URL = environment.apiURL
  PATH = 'signin'

  private autenticado = new BehaviorSubject<boolean>(localStorage.getItem('JWT_TOKEN') != null);
  autenticado$ = this.autenticado.asObservable();

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  login(login: string, password: string) {
    return this.httpClient.post<any>(this.BASE_URL+this.PATH, { login, password })
      .subscribe(response => {
        this.storeJwtToken(response.token);
        this.autenticado.next(true);
        this.router.navigate(['']);
      });
  }

  logout() {
    localStorage.removeItem('JWT_TOKEN');
    this.router.navigate(['/login']);
  }
  

  isLogado(): boolean {
    return this.autenticado.value;
  }
  private storeJwtToken(jwt: string) {
    localStorage.setItem(this.JWT_TOKEN, jwt);
  }

}

