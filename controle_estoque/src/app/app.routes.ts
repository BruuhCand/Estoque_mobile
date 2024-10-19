import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'movimentacoes',
    loadComponent: () =>
      import('./page/movimentacao/movimentacao.component').then(
        (m) => m.MovimentacaoComponent
      ),
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
            './page/estoque/estoque-detail/listas/estoque-all-produtos/estoque-all-produtos.component'
          ).then((m) => m.EstoqueAllProdutosComponent),
      },

      {
        path: 'compras',
        loadComponent: () => import('./page/estoque/estoque-detail/listas/compras/compras.page').then( m => m.ComprasPage)
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
    loadComponent: () => import('./page/venda/venda-produto/venda-produto.page').then( m => m.VendaProdutoPage)
  },


 



  

  

];
