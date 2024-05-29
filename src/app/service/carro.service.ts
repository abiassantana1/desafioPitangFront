import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from '../interface/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  BASE_URL = environment.apiURL
  PATH = 'cars'

  constructor(
    private httpClient: HttpClient
  ) { }

  listar(): Observable<any> {
    // { setHeaders: { Authorization: 'Bearer 123' } }
    
    return this.httpClient.get(this.BASE_URL+this.PATH, 
      { headers: { Authorization: 'Bearer '+localStorage.getItem('JWT_TOKEN') } });
  }

  buscar(id: number): Observable<any> {
    return this.httpClient.get(this.BASE_URL+this.PATH+'/'+id,
    { headers: { Authorization: 'Bearer '+localStorage.getItem('JWT_TOKEN') } }
    );
  }

  cadastrar(carro: Carro): Observable<any> {
    return this.httpClient.post(this.BASE_URL+this.PATH, carro,
      { headers: { Authorization: 'Bearer '+localStorage.getItem('JWT_TOKEN') } }
    );
  }

  editar(carro: Carro, id: number): Observable<any> {
    return this.httpClient.put(this.BASE_URL+this.PATH+'/'+id, carro,
      { headers: { Authorization: 'Bearer '+localStorage.getItem('JWT_TOKEN') } }
    );
  }

  remover(id: number): Observable<any> {
    return this.httpClient.delete(this.BASE_URL+this.PATH+'/'+id,
    { headers: { Authorization: 'Bearer '+localStorage.getItem('JWT_TOKEN') } }
    );
  }
}
