import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatSidenav, MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { ListarUsuarioComponent } from './pages/usuario/listar-usuario/listar-usuario.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { AuthService } from './service/auth.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    ListarUsuarioComponent,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [provideNativeDateAdapter()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'desafio-pitang';
  sidenav!: MatSidenav;
  autenticado!: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
  ){
    authService.autenticado$.subscribe(response => {
      this.autenticado = response;
      console.log(this.autenticado);
    })
  }

  logout() {
    this.authService.logout();
  }

  login() {
    this.router.navigate(['/login']);
  }
}
