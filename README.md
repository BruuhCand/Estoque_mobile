# Estoque_mobile

Projeto mobile em Ionic 
Desenvolvimento Mobile Eng. de Software 6 semestre


# Funcionalidades do Sistema
Usuário
Dono do estabelecimento responsável por gerenciar seu estoque.

1. Criação de Estoque
  O usuário deve ser capaz de criar um ou vários estoques.
  Ao criar, o usuário deve atribuir um nome ao estoque.
  O usuário deve ser capaz de alterar o nome do estoque.
  O usuário pode deletar um estoque, e todos os produtos atrelados a ele devem ser deletados.

3. Listar e Visualizar Produtos do Estoque
  Listar todos os produtos do estoque selecionado.
  Destacar produtos que estão abaixo do estoque mínimo.
  Destacar produtos que estão próximos da data de validade.
  Destacar produtos vencidos.
  Dever ter filtro por nome do produto, código de barras (com possibilidade de leitura pela câmera) e categoria.

5. Controle dos Produtos do Estoque
  O usuário deve ser capaz de cadastrar, visualizar, alterar e deletar produtos no estoque selecionado.
  Estrutura de dados do item do estoque:
  Estoque;
  Código de barras do produto;
  Nome do produto;
  Quantidade em estoque;
  Quantidade mínima;
  Data de validade;
  Data do cadastro;
  Categoria;
  Valor pago;
  Além da entrada manual do código de barras deve possibilitar a fotografar o código de barras do produto para cadastro.

6. Lista de Compras
  Geração automática da lista de compras com base no estoque mínimo.
  Itens abaixo do estoque mínimo devem ser adicionados à lista de compras.

7. Lista de Produtos Próximos ao Vencimento e Vencidos
  Listar todos os produtos próximos ao vencimento e vencidos.

9. Histórico de Movimentações no Estoque
  Exibir todas as movimentações do estoque: entrada, saída e exclusão de produtos.
  Filtrar por intervalo de datas.
  Relatório deve exibir o valor total de movimentações de entradas e saídas diárias do intervalo de dada selecionada no filtro.

11. Gerenciar Categorias
  Usuário deve ser capaz de criar, alterar e deletar as categorias.

13. Entrada de Produtos no estoque
  O sistema deve permitir a entrada de estoque por meio do código de barras do produto.

15. Saída de Estoque
  A saída de estoque pode ser realizada manualmente selecionando o item.
  Pode ser realizada também por meio da leitura dos códigos de barras do produto.

