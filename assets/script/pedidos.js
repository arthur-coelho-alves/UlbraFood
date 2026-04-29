const carrinho = document.getElementById("cart-toggle-btn");
const fecharCarrinho = document.getElementById("close-cart-btn");
const overlay = document.querySelector("#cart-overlay");
const aside = document.querySelector("aside");
const cartContainer = document.querySelector(".cart-items-container");
const cart_total = document.querySelector(".cart-total");

const btnSimples = document.querySelector(".simples_carne");
const btnCompleto = document.querySelector(".completo_carne");

const btnChurrosChocolate = document.querySelector(".churros_chocolate");
const btnChurrosDoceLeite = document.querySelector(".churros_doce_leite");

const btnPipocaSimples = document.querySelector(".simples");
const btnPipocaDoce = document.querySelector(".doce");

let id = 0;
let totalCompra = 0;

carrinho.addEventListener("click", aparecer);
fecharCarrinho.addEventListener("click", fechar);

function aparecer() {
    aside.style.display = "flex";
    overlay.style.display = "block";
}

function fechar() {
    aside.style.display = "none";
    overlay.style.display = "none";
}

btnSimples.addEventListener("click", () => {
    adicionarItem("Espetinho Simples", 10, "assets/images/espeto_carne.webp");
    mensagem();
});

btnCompleto.addEventListener("click", () => {
    adicionarItem("Espetinho Completo", 25, "assets/images/espeto_carne.webp");
    mensagem();
});

btnChurrosChocolate.addEventListener("click", () => {
    adicionarItem("Churros Chocolate", 8, "assets/images/churros.webp");
    mensagem();
});

btnChurrosDoceLeite.addEventListener("click", () => {
    adicionarItem("Churros Doce de Leite", 8, "assets/images/churros.webp");
    mensagem();
});

btnPipocaSimples.addEventListener("click", () => {
    adicionarItem("Pipoca Simples", 10, "assets/images/pipoca.jpg");
    mensagem();
});

btnPipocaDoce.addEventListener("click", () => {
    adicionarItem("Pipoca Doce", 10, "assets/images/pipoca.jpg");
    mensagem();
});

function adicionarItem(nome, preco, imgSrc) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const id_atual = "produto-" + id;
    id++;
    cartItem.dataset.id = id_atual;
    cartItem.dataset.preco = preco;

    const header = document.createElement("div");
    header.classList.add("cart-item-header");

    const img = document.createElement("img");
    img.src = imgSrc;

    const title = document.createElement("p");
    title.innerHTML = nome;

    const btnRemove = criarBotaoRemover(id_atual);

    const details = document.createElement("div");
    details.classList.add("cart-item-details");

    const spanPreco = document.createElement("span");
    spanPreco.innerHTML = `R$ ${preco.toFixed(2)}`;

    const controls = document.createElement("div");
    controls.classList.add("cart-item-controls");

    const btnMinus = document.createElement("button");
    btnMinus.classList.add("btn-quantity");
    btnMinus.innerHTML = "-";

    const qtd = document.createElement("span");
    qtd.innerHTML = "1";

    const btnPlus = document.createElement("button");
    btnPlus.classList.add("btn-quantity");
    btnPlus.innerHTML = "+";

    header.append(img, title, btnRemove);
    controls.append(btnMinus, qtd, btnPlus);
    details.append(spanPreco, controls);
    cartItem.append(header, details);

    cartContainer.append(cartItem);

    totalCompra += preco;
    atualizarTotal();
}

function criarBotaoRemover(id_atual) {
    const btn = document.createElement("button");
    btn.classList.add("btn-remove");
    btn.innerHTML = "Remover";

    btn.addEventListener("click", () => {
        removerPorId(id_atual);
    });

    return btn;
}

function removerPorId(id) {
    const item = document.querySelector(`[data-id="${id}"]`);

    if (item) {
        const preco = Number(item.dataset.preco);

        totalCompra -= preco;
        item.remove();

        atualizarTotal();
    }
}

function atualizarTotal() {
    cart_total.innerHTML = "";

    const label = document.createElement("span");
    label.innerHTML = "Total: ";

    const value = document.createElement("span");
    value.innerHTML = `R$ ${totalCompra.toFixed(2)}`;

    cart_total.append(label, value);
}
function mensagem(){
    const body = document.querySelector("body")

    const body2 = document.createElement("div");
    body2.classList.add("body2");
    body2.style.display = "flex"
    const divNotificacao = document.createElement("div")
     divNotificacao.classList.add("notificacao");
     body2.append(divNotificacao);
     body.append(body2)


     divNotificacao.style.display = "flex";

     const paragrafo = document.createElement("p")
     paragrafo.innerHTML = "Produto Adicionado";
     divNotificacao.append(paragrafo)


     setTimeout(() => {
        body2.classList.add("fade-out");
},1000);
     setTimeout(() => {
        body2.remove()
}, 2000);
}
