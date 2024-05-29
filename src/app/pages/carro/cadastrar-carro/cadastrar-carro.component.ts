import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { UsuarioService } from '../../../service/usuario.service';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CarroService } from '../../../service/carro.service';

@Component({
  selector: 'app-cadastrar-carro',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatDatepickerModule],
  templateUrl: './cadastrar-carro.component.html',
  styleUrl: './cadastrar-carro.component.scss'
})
export class CadastrarCarroComponent {
  formulario!: FormGroup;

  getId(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private carroService: CarroService,
  ) {

  }

  ngOnInit() {
    this.configurarFormulario();
    if(this.getId()) {
      this.carregarDadosFormulario();
    }
  }

  carregarDadosFormulario() {
    this.carroService.buscar(this.getId()).subscribe(response => {
      this.formulario.patchValue(response)
    })
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [null],
      year: [null, [Validators.required]],
      licensePlate: [null, [Validators.required]],
      model: [null, [Validators.required]],
      color: [null, [Validators.required]],
    })
  }

  onSubmit() {
    if(this.formulario.get('id')?.value == null) {
      this.carroService.cadastrar(this.formulario.value).subscribe( response => {
        this.router.navigateByUrl('carro')
      })
    } else {
      this.carroService.editar(this.formulario.value, this.formulario.get('id')?.value).subscribe( response => {
        this.router.navigateByUrl('carro')
      });
        
    }
  }
}
