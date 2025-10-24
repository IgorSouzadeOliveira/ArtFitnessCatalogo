# ArtFitness: Catálogo Digital de Equipamentos Premium

## Visão Geral do Projeto

Este repositório contém o código-fonte para a **página de Catálogo de Produtos** do website oficial da ArtFitness. Diferente da *Home Page* principal (focada em geração de leads e contato inicial), esta seção tem o objetivo de ser uma **vitrine digital detalhada** e funcional para nossos clientes corporativos.

O principal propósito desta página é permitir que o cliente navegue, filtre e explore toda a linha de equipamentos *premium* da ArtFitness de forma intuitiva, facilitando a escolha de produtos antes da **solicitação de um orçamento personalizado**.

## Funcionalidades Principais (Foco no Catálogo)

  * **Listagem Completa de Produtos:** Apresentação de todos os equipamentos de forma organizada.
  * **Sistema de Filtros Avançado:** Permite aos usuários filtrar produtos por:
      * **Categoria:** (Ex: Cardio, Força, Funcional, Acessórios)
      * **Marca:** (Listagem de todas as marcas parceiras)
      * **Status/Destaque:** (Ex: Novidade, Mais Vendido, Em Promoção)
  * **Busca em Tempo Real:** Funcionalidade de pesquisa por nome ou descrição do produto.
  * **Cards de Produto Otimizados:** Cada equipamento é exibido em um card contendo:
      * Imagem de alta qualidade.
      * Nome e breve descrição.
      * Marca e Categoria.
      * Botão **"Solicitar Orçamento"** (Redirecionando para o formulário de contato ou modal).
  * **Design Responsivo:** O layout se adapta perfeitamente a *desktops*, *tablets* e *smartphones*.

## Objetivo Estratégico

A página de Catálogo atua como uma ferramenta de **qualificação de interesse**. Ao permitir que o cliente explore as opções, ele chega ao formulário de orçamento com uma ideia mais clara dos produtos que deseja, otimizando o tempo da nossa equipe comercial.

  * **Exposição Máxima:** Garante que toda a variedade de produtos seja facilmente acessível.
  * **Melhora a Experiência:** Oferece uma navegação fácil e eficiente, reforçando a imagem profissional da ArtFitness.
  * **Base para Orçamento:** Serve como um passo intermediário crucial entre o interesse inicial e o pedido de cotação.

## Tecnologias Utilizadas

| Tecnologia | Finalidade |
| :--- | :--- |
| **HTML5** | Estrutura semântica da página. |
| **CSS3** | Estilização e design (com personalizações via `style.css`). |
| **Bootstrap 5.3** | *Framework* CSS para *layout* responsivo, componentes de *grid*, e base para os filtros. |
| **JavaScript (ES6+)** | Lógica de **Filtros Dinâmicos** e **Busca em Tempo Real** no *client-side*. |
| **JSON** | Simulação de uma base de dados de produtos para carregamento dinâmico. |

## Estrutura do Projeto

```
ARTFITNESSCATALOGO/
├── css/
│   └── style.css           # Estilos CSS personalizados
├── data/
│   └── products.json       # Dados dos produtos para carregamento dinâmico
├── images/
│   ├── logo.png            
│   └── equipamentos/       # Imagens de todos os produtos
├── js/
│   └── catalogo.js          # Script principal para lógica de filtros, busca e renderização do catálogo
├── index.html              # Página principal (Home Page - *assumida em outro repositório ou branch*)
└── catalogo.html           # Página de Catálogo de Produtos (Foco deste repositório)
```

## Como Visualizar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone https://docs.github.com/pt/repositories/creating-and-managing-repositories/about-repositories
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd ARTFITNESS\ PROJECT
    ```
3.  **Abra o arquivo `catalogo.html`:**
      * Você pode abrir o arquivo `catalogo.html` diretamente em seu navegador (Chrome, Firefox, etc.).
      * Para testar a busca e os filtros de forma mais robusta, é recomendado usar uma extensão como o "Live Server" no VS Code.

## Próximos Passos (Desenvolvimento Futuro)

  * **Paginação:** Implementação de paginação para catálogos com um número muito grande de produtos.
  * **Múltiplos Filtros:** Permitir a aplicação simultânea de filtros de categoria e marca.
  * **Integração Real:** Adaptar o código `catalog.js` para consumir dados de uma **API** ou **CMS** real, substituindo o arquivo `products.json`.
  * **Modal de Detalhes:** Adicionar um modal de visualização rápida com mais informações ao clicar em um produto.

## Contribuição
Sua ajuda é muito bem-vinda\! Se você tem sugestões de *design*, otimização de *performance* nos filtros ou correções, por favor:

1.  Abra uma **Issue** para discutir a melhoria.
2.  Envie um **Pull Request** com suas alterações.
