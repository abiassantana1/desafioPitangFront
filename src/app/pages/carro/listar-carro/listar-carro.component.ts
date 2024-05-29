import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';
import { Usuario } from '../../../interface/usuario';
import { UsuarioService } from '../../../service/usuario.service';
import { DetalhareDialogComponet } from '../../../shared/components/detalhar-dialog/detalhar-dialog.component';
import { CarroService } from '../../../service/carro.service';
import { Carro } from '../../../interface/carro';

@Component({
  selector: 'app-listar-carro',
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
    RouterLink],
  templateUrl: './listar-carro.component.html',
  styleUrl: './listar-carro.component.scss'
})
export class ListarCarroComponent {

  displayedColumns: string[] = [ 'id', 'year', 'licensePlate', 'model', 'acoes'];
  carros: Carro[] = [];
  carroSelecionado!: Carro;
  constructor(
    private router: Router,
    private carroService: CarroService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
   this.carroService.listar().subscribe(response =>  {
    this.carros = response;
    });
  }

  openDialog(carro: Carro): void {
    const dialogRef = this.dialog.open(DetalhareDialogComponet, {
      data: [
      {atributo: 'Year', valor: carro.year},
      {atributo: 'License Plate', valor: carro.licensePlate},
      {atributo: 'Model', valor: carro.model},
      {atributo: 'Color', valor: carro.color},
      ],
    });
  }
  
  detalhar(carro: Carro) {
    this.openDialog(carro)
  }

  remover(id: number) {
    this.carroService.remover(id).subscribe(response => {
      window.location.reload();
    })
  }
}
