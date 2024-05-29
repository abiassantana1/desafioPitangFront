import { Routes } from '@angular/router';
import { CadastrarUsuarioComponent } from './pages/usuario/cadastrar-usuario/cadastrar-usuario.component';
import { ListarUsuarioComponent } from './pages/usuario/listar-usuario/listar-usuario.component';

export const routes: Routes = [
    { path: 'usuario', component: ListarUsuarioComponent },
    { 
        path: 'usuario/cadastrar', 
        loadComponent: () => 
            import('./pages/usuario/cadastrar-usuario/cadastrar-usuario.component').then(
                (m) => m.CadastrarUsuarioComponent
            ),
    },
    { 
        path: 'usuario/editar/:id', 
        loadComponent: () => 
            import('./pages/usuario/cadastrar-usuario/cadastrar-usuario.component').then(
                (m) => m.CadastrarUsuarioComponent
            ),
    }

];
