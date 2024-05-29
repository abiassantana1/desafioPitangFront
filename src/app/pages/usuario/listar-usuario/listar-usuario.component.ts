import { Component, Inject } from '@angular/core';
import { UsuarioService } from '../../../service/usuario.service';
import {MatTableModule} from '@angular/material/table';
import { Usuario } from '../../../interface/usuario';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { Router, RouterLink } from '@angular/router';
import {
  MatDialog,
  MatDialogRef,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DetalhareDialogComponet } from '../../../shared/components/detalhar-dialog/detalhar-dialog.component';

@Component({
  selector: 'app-listar-usuario',
  standalone: true,
  imports: [
    MatTableModule, 
    MatButtonModule, 
    MatDividerModule, 
    MatIconModule, 
    MatDividerModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    RouterLink
  ],
  templateUrl: './listar-usuario.component.html',
  styleUrl: './listar-usuario.component.scss'
})
export class ListarUsuarioComponent {
  displayedColumns: string[] = [ 'id', 'firstName', 'email', 'acoes'];
  usuarios: Usuario[] = [];
  usuarioSelecionado!: Usuario;
  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
   this.usuarioService.listaUsuarios().subscribe(response =>  {
    this.usuarios = response;
    });
  }

  openDialog(usuario: Usuario): void {
    const dialogRef = this.dialog.open(DetalhareDialogComponet, {
      data: [{atributo: 'nome', valor: usuario.firstName+' '+usuario.lastName},
      {atributo: 'email', valor: usuario.email},
      {atributo: 'login', valor: usuario.login},
      {atributo: 'birthday', valor: usuario.birthday},
      {atributo: 'phone', valor: usuario.phone},
      ],
    });
  }
  
  detalhar(usuario: Usuario) {
    this.openDialog(usuario)
  }

  remover(id: number) {
    this.usuarioService.remover(id).subscribe(response => {
      window.location.reload();
    })
  }
}

