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
let totalCompra = 0

carrinho.addEventListener("click", aparecer);
fecharCarrinho.addEventListener("click", fechar);

btnSimples.addEventListener("click", () => {
    adicionarEspeto("Espetinho Simples", "R$ 10,00");
    totalCompra += 10;
    atualizarTotal();
});

btnCompleto.addEventListener("click", () => {
    adicionarEspeto("Espetinho Completo", "R$ 25,00");
    totalCompra += 25;
    atualizarTotal();
});

btnChurrosChocolate.addEventListener("click", () => {
    adicionarChurros("Churros Chocolate", "R$ 8,00");
    totalCompra += 8;
    atualizarTotal();
});

btnChurrosDoceLeite.addEventListener("click", () => {
    adicionarChurros("Churros Doce de Leite", "R$ 8,00");
    totalCompra += 8;
    atualizarTotal();
});

btnPipocaSimples.addEventListener("click", () => {
    adicionarPipoca("Pipoca Simples", "R$ 10,00");
    totalCompra += 10;
    atualizarTotal();
});

btnPipocaDoce.addEventListener("click", () => {
    adicionarPipoca("Pipoca de Doce ", "R$ 10,00");
    totalCompra += 10;
    atualizarTotal();
});
function aparecer() {
    aside.style.display = "flex";
    overlay.style.display = "block";
}

function fechar() {
    aside.style.display = "none";
    overlay.style.display = "none";
}

function removerPorId(id) {
    const item = document.querySelector(`[data-id="${id}"]`);
    if (item) item.remove();
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

function adicionarEspeto(nome, preco) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const id_atual = "produto-" + id++;
    cartItem.dataset.id = id_atual;

    const cartItemHeader = document.createElement("div");
    cartItemHeader.classList.add("cart-item-header");

    const imgCart = document.createElement("img");
    imgCart.src = "assets/images/espeto_carne.webp";

    const cartP = document.createElement("p");
    cartP.innerHTML = nome;

    const cartRemove = criarBotaoRemover(id_atual);

    const cartDetails = document.createElement("div");
    cartDetails.classList.add("cart-item-details");

    const cartSpan = document.createElement("span");
    cartSpan.innerHTML = preco;

    const cartControls = document.createElement("div");
    cartControls.classList.add("cart-item-controls");

    const cartReduce = document.createElement("button");
    cartReduce.classList.add("btn-quantity");
    cartReduce.innerHTML = "-";

    const cartSpanQtd = document.createElement("span");
    cartSpanQtd.innerHTML = "1";

    const cartAdd = document.createElement("button");
    cartAdd.classList.add("btn-quantity");
    cartAdd.innerHTML = "+";

    cartItemHeader.append(imgCart, cartP, cartRemove);
    cartControls.append(cartReduce, cartSpanQtd, cartAdd);
    cartDetails.append(cartSpan, cartControls);
    cartItem.append(cartItemHeader, cartDetails);

    cartContainer.append(cartItem);
    total(total);
}

function adicionarChurros(nome, preco) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const id_atual = "produto-" + id++;
    cartItem.dataset.id = id_atual;

    const cartItemHeader = document.createElement("div");
    cartItemHeader.classList.add("cart-item-header");

    const imgCart = document.createElement("img");
    imgCart.src = "assets/images/churros.webp";

    const cartP = document.createElement("p");
    cartP.innerHTML = nome;

    const cartRemove = criarBotaoRemover(id_atual);

    const cartDetails = document.createElement("div");
    cartDetails.classList.add("cart-item-details");

    const cartSpan = document.createElement("span");
    cartSpan.innerHTML = preco;

    const cartControls = document.createElement("div");
    cartControls.classList.add("cart-item-controls");

    const cartReduce = document.createElement("button");
    cartReduce.classList.add("btn-quantity");
    cartReduce.innerHTML = "-";

    const cartSpanQtd = document.createElement("span");
    cartSpanQtd.innerHTML = "1";

    const cartAdd = document.createElement("button");
    cartAdd.classList.add("btn-quantity");
    cartAdd.innerHTML = "+";

    cartItemHeader.append(imgCart, cartP, cartRemove);
    cartControls.append(cartReduce, cartSpanQtd, cartAdd);
    cartDetails.append(cartSpan, cartControls);
    cartItem.append(cartItemHeader, cartDetails);

    cartContainer.append(cartItem);
    total(total);
}

function adicionarPipoca(nome, preco) {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const id_atual = "produto-" + id++;
    cartItem.dataset.id = id_atual;

    const cartItemHeader = document.createElement("div");
    cartItemHeader.classList.add("cart-item-header");

    const imgCart = document.createElement("img");
    imgCart.src = "assets/images/pipoca.jpg";

    const cartP = document.createElement("p");
    cartP.innerHTML = nome;

    const cartRemove = criarBotaoRemover(id_atual);

    const cartDetails = document.createElement("div");
    cartDetails.classList.add("cart-item-details");

    const cartSpan = document.createElement("span");
    cartSpan.innerHTML = preco;

    const cartControls = document.createElement("div");
    cartControls.classList.add("cart-item-controls");

    const cartReduce = document.createElement("button");
    cartReduce.classList.add("btn-quantity");
    cartReduce.innerHTML = "-";

    const cartSpanQtd = document.createElement("span");
    cartSpanQtd.innerHTML = "1";

    const cartAdd = document.createElement("button");
    cartAdd.classList.add("btn-quantity");
    cartAdd.innerHTML = "+";

    cartItemHeader.append(imgCart, cartP, cartRemove);
    cartControls.append(cartReduce, cartSpanQtd, cartAdd);
    cartDetails.append(cartSpan, cartControls);
    cartItem.append(cartItemHeader, cartDetails);

    cartContainer.append(cartItem);
    total(total);
}
function total(total){
    const span_total = document.createElement("span")
    span_total.innerHTML = "Total:";

    const span_preco = document.createElement("span")
    span_preco.innerHTML = `${total}`

    cart_total.append(span_total, span_preco)
}
function atualizarTotal() {
    cart_total.innerHTML = "";

    const span_total = document.createElement("span");
    span_total.innerHTML = "Total: ";

    const span_preco = document.createElement("span");
    span_preco.innerHTML = `R$ ${totalCompra.toFixed(2)}`;

    cart_total.append(span_total, span_preco);
}
