import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'estoques',
    pathMatch: 'full',
  },
  {
    path: 'estoques',
    loadComponent: () => import('./page/estoque/estoque-list/estoque-list.page').then(m => m.EstoqueListPage),
  },
  {
    path: 'estoque/:id',
    loadComponent: () => import('./page/estoque/estoque-detail/estoque-detail.page').then(m => m.EstoqueDetailPage),
    children: [
      {
        path: '',
        loadComponent: () => import('./page/estoque/estoque-detail/estoque-geral/estoque-geral.component').then(m => m.EstoqueGeralComponent)
      },
      {
        path: 'produtos',
        loadComponent: () => import('./page/estoque/estoque-detail/estoque-all-produtos/estoque-all-produtos.component').then(m => m.EstoqueAllProdutosComponent)
      }
    ]
  },
  {
    path: 'estoque/criate',
    loadComponent: () => import('./page/estoque/estoque-criate/estoque-criate.page').then(m => m.EstoqueCriatePage)
  },
  {
    path: 'produto/create',
    loadComponent: () => import('./page/produto/produto-create/produto-create.page').then( m => m.ProdutoCreatePage)
  },
  {
    path: 'produto/:id',
    loadComponent: () => import('./page/produto/produto-create/produto-create.page').then( m => m.ProdutoCreatePage)
  }

];
