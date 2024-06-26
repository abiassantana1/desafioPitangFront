import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { UsuarioService } from '../../../service/usuario.service';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../../../interface/usuario';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-cadastrar-usuario',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatCardModule, MatDatepickerModule],
  templateUrl: './cadastrar-usuario.component.html',
  styleUrl: './cadastrar-usuario.component.scss'
})
export class CadastrarUsuarioComponent {

  formulario!: FormGroup;
  usuarioLogado!: Usuario;

  getId(): number {
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private authService: AuthService
  ) {

  }

  ngOnInit() {
    this.authService.usuarioLogado$.subscribe( usuario => {
      this.usuarioLogado = usuario;
    });
    this.configurarFormulario();
    if(this.getId()) {
      this.carregarDadosFormulario();
    }
  }

  carregarDadosFormulario() {
    this.usuarioService.buscar(this.getId()).subscribe(response => {
      this.formulario.patchValue(response)
    })
  }

  configurarFormulario() {
    this.formulario = this.formBuilder.group({
      id: [null],
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required]],
      birthday: [null, [Validators.required]],
      login: [null, [Validators.required]],
      password: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      cars: [[]]
    })
  }

  onSubmit() {
    if(this.getId()) {
      this.usuarioService.editar(this.getId(), this.formulario.value).subscribe( response => {
        if(this.usuarioLogado.role == 'ADMIN') {
          this.router.navigateByUrl('usuario');
        } else {
          this.authService.atualizarUsuarioLogado();
          this.router.navigateByUrl('carro');
        }
        
      })
    } else {
      this.usuarioService.cadastrar(this.formulario.value).subscribe( response => {
        if(this.usuarioLogado.role == 'ADMIN') {
          this.router.navigateByUrl('usuario');
        } else {
          this.router.navigateByUrl('carro');
        }
        
      })
    }
  
  }

}
