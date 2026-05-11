const botaoAbrirCarrinho = document.getElementById("cart-toggle-btn");
const botaoFecharCarrinho = document.getElementById("close-cart-btn");
const overlayCarrinho = document.querySelector("#cart-overlay");
const menuLateralAside = document.querySelector("aside");
const containerItensCarrinho = document.querySelector(".cart-items-container");
const elementoTotalCompra = document.querySelector(".cart-total");

const btnSimplesCarne = document.querySelector(".simples_carne");
const btnCompletoCarne = document.querySelector(".completo_carne");
const btnChurrosChocolate = document.querySelector(".churros_chocolate");
const btnChurrosDoceLeite = document.querySelector(".churros_doce_leite");
const btnPipocaSimples = document.querySelector(".simples");
const btnPipocaDoce = document.querySelector(".doce");

let contadorId = 0;
let valorTotalCompra = 0;
let listaProdutosPedido = [];
const storagePedido = localStorage.getItem("pedido");

try {
    if (storagePedido) {
        listaProdutosPedido = JSON.parse(storagePedido);
    }
} catch (erro) {
    console.error("Erro ao ler localStorage:", erro);
    listaProdutosPedido = [];
    localStorage.removeItem("pedido");
}

function salvarNoLocalStorage(chave, valor) {
    const dadosConvertidos = JSON.stringify(valor);
    localStorage.setItem(chave, dadosConvertidos);
}

function abrirMenuCarrinho() {
    menuLateralAside.style.display = "flex";
    overlayCarrinho.style.display = "block";
}

function fecharMenuCarrinho() {
    menuLateralAside.style.display = "none";
    overlayCarrinho.style.display = "none";
}

function atualizarDisplayTotal() {
    elementoTotalCompra.innerHTML = "";
    const label = document.createElement("span");
    label.innerHTML = "Total: ";
    const valor = document.createElement("span");
    valor.innerHTML = `R$ ${valorTotalCompra.toFixed(2)}`;
    elementoTotalCompra.append(label, valor);
}

function exibirNotificacaoAdicionado() {
    const corpoPagina = document.querySelector("body");
    const containerMensagem = document.createElement("div");
    containerMensagem.classList.add("body2");
    containerMensagem.style.display = "flex";

    const divNotificacao = document.createElement("div");
    divNotificacao.classList.add("notificacao");

    const paragrafo = document.createElement("p");
    paragrafo.innerHTML = "Produto Adicionado";

    divNotificacao.append(paragrafo);
    containerMensagem.append(divNotificacao);
    corpoPagina.append(containerMensagem);

    setTimeout(() => { containerMensagem.classList.add("fade-out"); }, 1000);
    setTimeout(() => { containerMensagem.remove(); }, 2000);
}

function adicionarItemAoCarrinho(nome, preco, caminhoImagem) {
    const divItem = document.createElement("div");
    divItem.classList.add("cart-item");

    const idAtual = "produto-" + contadorId;
    contadorId++;

    divItem.dataset.id = idAtual;
    divItem.dataset.preco = preco;

    const header = document.createElement("div");
    header.classList.add("cart-item-header");

    const img = document.createElement("img");
    img.src = caminhoImagem;

    const title = document.createElement("p");
    title.innerHTML = nome;

    const btnRemover = criarBotaoRemover(idAtual);

    const detalhes = document.createElement("div");
    detalhes.classList.add("cart-item-details");

    const spanPreco = document.createElement("span");
    spanPreco.innerHTML = `R$ ${preco.toFixed(2)}`;

    const controles = document.createElement("div");
    controles.classList.add("cart-item-controls");

    const btnMenos = document.createElement("button");
    btnMenos.classList.add("btn-quantity");
    btnMenos.innerHTML = "-";

    const spanQtd = document.createElement("span");
    spanQtd.innerHTML = "1";

    const btnMais = document.createElement("button");
    btnMais.classList.add("btn-quantity");
    btnMais.innerHTML = "+";

    header.append(img, title, btnRemover);
    controles.append(btnMenos, spanQtd, btnMais);
    detalhes.append(spanPreco, controles);
    divItem.append(header, detalhes);

    containerItensCarrinho.append(divItem);

    valorTotalCompra += preco;
    atualizarDisplayTotal();
    salvarNoLocalStorage("pedido", listaProdutosPedido);
}

function criarBotaoRemover(idReferencia) {
    const btn = document.createElement("button");
    btn.classList.add("btn-remove");
    btn.innerHTML = "Remover";
    btn.addEventListener("click", () => {
        removerItemPorId(idReferencia);
    });
    return btn;
}

function removerItemPorId(idElemento) {
    const elementoHtml = document.querySelector(`[data-id="${idElemento}"]`);
    if (elementoHtml) {
        const precoItem = Number(elementoHtml.dataset.preco);
        valorTotalCompra -= precoItem;
        elementoHtml.remove();
        atualizarDisplayTotal();
    }
}

botaoAbrirCarrinho.addEventListener("click", abrirMenuCarrinho);
botaoFecharCarrinho.addEventListener("click", fecharMenuCarrinho);

btnSimplesCarne.addEventListener("click", () => {
    listaProdutosPedido.push(["Espetinho Simples", 10, "assets/images/espeto_carne.webp"]);
    adicionarItemAoCarrinho("Espetinho Simples", 10, "assets/images/espeto_carne.webp");
    exibirNotificacaoAdicionado();
});

btnCompletoCarne.addEventListener("click", () => {
    listaProdutosPedido.push(["Espetinho Completo", 25, "assets/images/espeto_carne.webp"]);
    adicionarItemAoCarrinho("Espetinho Completo", 25, "assets/images/espeto_carne.webp");
    exibirNotificacaoAdicionado();
});

btnChurrosChocolate.addEventListener("click", () => {
    listaProdutosPedido.push(["Churros Chocolate", 8, "assets/images/churros.webp"]);
    adicionarItemAoCarrinho("Churros Chocolate", 8, "assets/images/churros.webp");
    exibirNotificacaoAdicionado();
});

btnChurrosDoceLeite.addEventListener("click", () => {
    listaProdutosPedido.push(["Churros Doce de Leite", 8, "assets/images/churros.webp"]);
    adicionarItemAoCarrinho("Churros Doce de Leite", 8, "assets/images/churros.webp");
    exibirNotificacaoAdicionado();
});

btnPipocaSimples.addEventListener("click", () => {
    listaProdutosPedido.push(["Pipoca Simples", 10, "assets/images/pipoca.jpg"]);
    adicionarItemAoCarrinho("Pipoca Simples", 10, "assets/images/pipoca.jpg");
    exibirNotificacaoAdicionado();
});

btnPipocaDoce.addEventListener("click", () => {
    listaProdutosPedido.push(["Pipoca Doce", 10, "assets/images/pipoca.jpg"]);
    adicionarItemAoCarrinho("Pipoca Doce", 10, "assets/images/pipoca.jpg");
    exibirNotificacaoAdicionado();
});

window.onload = function() {
    if (listaProdutosPedido.length > 0) {
        valorTotalCompra = 0;
        containerItensCarrinho.innerHTML = "";
        for (let i = 0; i < listaProdutosPedido.length; i++) {
            adicionarItemAoCarrinho(
                listaProdutosPedido[i][0],
                listaProdutosPedido[i][1],
                listaProdutosPedido[i][2]
            );
        }
    }
};
