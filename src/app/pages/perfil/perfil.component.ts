import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { Usuario } from '../../interface/usuario';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.scss'
})
export class PerfilComponent {

  usuario!: Usuario;

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.authService.usuarioLogado$.subscribe( usuario => {
      this.usuario = usuario;
    });
    
  }
}
