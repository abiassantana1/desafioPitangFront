import { Routes } from '@angular/router';
import { CadastrarUsuarioComponent } from './pages/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './pages/usuario/listar-usuario/listar-usuario.component';
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
        canActivate: [AuthGuardService],
        loadComponent: () => 
            import('./pages/usuario/cadastrar-usuario/cadastrar-usuario.component').then(
                (m) => m.CadastrarUsuarioComponent
            ),
    }

];
