import { Routes } from '@angular/router';
import { AuthGuardService } from './shared/guard/auth-guard.service';

export const routes: Routes = [
    { 
        path: 'login', 
        loadComponent: () => 
            import('./pages/login/login.component').then(
                (m) => m.LoginComponent
            ),
    },
    {   path: 'usuario', 
        canActivate: [],
        loadComponent: () => 
            import('./pages/usuario/listar-usuario/listar-usuario.component').then(
                (m) => m.ListarUsuarioComponent
            ),
    },
    { 
        path: 'usuario/cadastrar', 
        canActivate: [],
        loadComponent: () => 
            import('./pages/usuario/cadastrar-usuario/cadastrar-usuario.component').then(
                (m) => m.CadastrarUsuarioComponent
            ),
    },
    { 
        path: 'usuario/editar/:id', 
        canActivate: [],
        loadComponent: () => 
            import('./pages/usuario/cadastrar-usuario/cadastrar-usuario.component').then(
                (m) => m.CadastrarUsuarioComponent
            ),
    },
    {   path: 'carro', 
    canActivate: [AuthGuardService],
    loadComponent: () => 
        import('./pages/carro/listar-carro/listar-carro.component').then(
            (m) => m.ListarCarroComponent
        ),
},
{ 
    path: 'carro/cadastrar', 
    canActivate: [AuthGuardService],
    loadComponent: () => 
        import('./pages/carro/cadastrar-carro/cadastrar-carro.component').then(
            (m) => m.CadastrarCarroComponent
        ),
},
{ 
    path: 'carro/editar/:id', 
    canActivate: [AuthGuardService],
    loadComponent: () => 
        import('./pages/carro/cadastrar-carro/cadastrar-carro.component').then(
            (m) => m.CadastrarCarroComponent
        ),
},

];
