import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'estoques',
    loadComponent: () =>
      import('./page/estoque/estoque-list/estoque-list.page').then(
        (m) => m.EstoqueListPage
      ),
  },
  {
    path: 'estoque/:id',
    loadComponent: () =>
      import('./page/estoque/estoque-detail/estoque-detail.page').then(
        (m) => m.EstoqueDetailPage
      ),
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './page/estoque/estoque-detail/estoque-geral/estoque-geral.component'
          ).then((m) => m.EstoqueGeralComponent),
      },
      {
        path: 'produtos',
        loadComponent: () =>
          import(
            './page/estoque/estoque-detail/estoque-all-produtos/estoque-all-produtos.component'
          ).then((m) => m.EstoqueAllProdutosComponent),
      },
    ],
  },
  {
    path: 'estoques/create',
    loadComponent: () =>
      import('./page/estoque/estoque-criate/estoque-criate.page').then(
        (m) => m.EstoqueCriatePage
      ),
  },
  {
    path: 'produto/:id',
    loadComponent: () =>
      import('./page/produto/produto-create/produto-create.page').then(
        (m) => m.ProdutoCreatePage
      ),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./page/login/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register-user',
    loadComponent: () =>
      import('./page/login/register-user/register-user.page').then(
        (m) => m.RegisterUserPage
      ),
  },

  {
    path: 'controle-produtos',
    loadComponent: () =>
      import('./page/produto/controle-produto/controle-produto.page').then(
        (m) => m.ControleProdutoPage
      ),
  },
  {
    path: 'venda/:id',
    loadComponent: () =>
      import('./page/venda/all-produtos/all-produtos.page').then(
        (m) => m.AllProdutosPage
      ),
      children: [
          {
            path: 'validade/:idprod',
            loadComponent: () => import('./page/venda/validade-produto/validade-produto.page').then( m => m.ValidadeProdutoPage)
          },
          {
            path: 'detail',
            loadComponent: () => import('./page/venda/venda-detail/venda-detail.page').then( m => m.VendaDetailPage)
          },
        
      ]
  },
  

];
