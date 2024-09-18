import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'estoques',
    pathMatch: 'full',
  },
  {
    path: 'estoques',
    loadComponent: () => import('./page/estoque/estoque-list/estoque-list.page').then( m => m.EstoqueListPage)
  },
  {
    path: 'estoque/:id',
    loadComponent: () => import('./page/estoque/estoque-detail/estoque-detail.page').then( m => m.EstoqueDetailPage)
  },
 
];
