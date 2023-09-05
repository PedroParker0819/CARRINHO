
const produtos = [
    {
        id:"1",
        nome:"Informática para internet: Intewrfaces web 2",
        prof:"Prof. Kelly",
        preco_de: 80,
        preco_por: 50,
        descricao:"Curso de JavaScript",
        img:"./assets/3.png",
    },

{
    id:"2",
    nome: "Gestão de Conteúdo Web 2",
    prof: "Prof. Kelly",
    preco_de: 80,
    preco_por: 50,
    descricao:"Curso de JavaScript",
    img:"./assets/3.png",
},
];

function renderizaProdutos() {
    let html = "";
    for(let i = 0; 1 < produtos.length; i++) {
        html = html + criaProduto(produtos[i], i);
    }
    return html;
}

function criaProduto(produto, index) {
    return `
    <div class="curso">
    <img class'inicio' title="t" src="${produto.img}" />
    <div class="curso-info">
        <h4>${produto.nome}</h4>
        <p>${produto.prof}</p>
        <p>${produto.descricao}</p>
    </div>
    <div class="curso-preco">
        <span class="preco-de">R$${produto.preco_de}</span>
        <span class="preco-por">R$${produto.preco_por}</span>
    <button class="btncar btn-add" data-index="${index}"></button>
    </div> 
</div>
    `;
}
const container = document.querySelector("#container")
container.innerHTML= renderizaProdutos();   

// Array para armazenar os itens do carrinho
let itensCarrinho = [];

// Função para adicionar um item ao carrinho
function adicionarItemCarrinho(item) {
  itensCarrinho.push(item);
}

// Função para remover um item do carrinho
function removerItemCarrinho(item) {
  const index = itensCarrinho.indexOf(item);
  if (index > -1) {
    itensCarrinho.splice(index, 1);
  }
}

// Função para exibir os itens no carrinho
function exibirItensCarrinho() {
  const listaItens = document.getElementById("lista-itens");
  listaItens.innerHTML = "";

  for (let i = 0; i < itensCarrinho.length; i++) {
    const item = itensCarrinho[i];
    const li = document.createElement("li");
    li.textContent = item.nome;
    listaItens.appendChild(li);
  }
}

// Função para calcular o valor total dos itens no carrinho
function calcularTotal() {
  let total = 0;

  for (let i = 0; i < itensCarrinho.length; i++) {
    total += itensCarrinho[i].preco;
  }

  const totalElement = document.getElementById("total");
  totalElement.textContent = "Total: R$ " + total.toFixed(2);
}

// Função para limpar o carrinho
function limparCarrinho() {
  itensCarrinho = [];
  exibirItensCarrinho();
  calcularTotal();
}

// Event listener para o botão "Limpar Carrinho"
const limparCarrinhoBtn = document.getElementById("limpar-carrinho");
limparCarrinhoBtn.addEventListener("click", limparCarrinho);