import { Routes } from '@angular/router';
import { GestaoUsuariosComponent } from './gestao-usuarios/gestao-usuarios.component';

export const routes: Routes = [
  {
    path: 'usuarios',
    component: GestaoUsuariosComponent,
  },
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full',
  },
];
