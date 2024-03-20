const imgsCard = document.querySelectorAll(".imgHidden");

imgsCard.forEach((img) => {
  img.addEventListener("mouseenter", (event) => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      if (event.target == card.querySelector(".imgHidden")) {
        const cardBody = card.querySelector(".card-body");
        cardBody.style.paddingTop = `${img.clientHeight - 170}px`;
      }
    });
  });

  img.addEventListener("mouseleave", (event) => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      if (event.target == card.querySelector(".imgHidden")) {
        const cardBody = card.querySelector(".card-body");
        cardBody.style.paddingTop = `${16}px`;
      }
    });
  });
});

class Carrinho {
  constructor() {
    this.carrinho = [];
  }

  adicionarProdutos(produto) {
    if (this.carrinho.length == 0) {
      const carrinhoBtn = document.querySelector(".carrinhoBtn");
      carrinhoBtn.classList.remove("d-none");
      this.mudancaDoCarrinho("criarLista", "", produto);
    }
    this.mudancaDoCarrinho("adicionar", "", produto);
    this.carrinho.push(produto);
  }

  removerProduto(produto, event) {
    this.mudancaDoCarrinho("apagarD", event);
    this.carrinho.splice(this.carrinho.indexOf(produto), 1);
  }

  removerProdutos() {
    this.mudancaDoCarrinho("apagarT");
    this.carrinho = [];
    const carrinhoBtn = document.querySelector("carrinhoBtn");
    carrinhoBtn.classList.add("d-none");
  }

  fazerPedido() {
    const form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", "/requests");

    for (let i = 0; i < this.carrinho.length; i++) {
      const usernameInput = document.createElement("input");
      usernameInput.setAttribute("type", "text");
      usernameInput.setAttribute("name", this.carrinho[i]);
      usernameInput.setAttribute("value", this.carrinho[i]);
      form.appendChild(usernameInput);
    }
    document.body.appendChild(form);
    form.submit();
  }

  mudancaDoCarrinho(operacao, event = "", produto = "") {
    const containerLista = document.querySelector(".offcanvas-body");

    switch (operacao) {
      case "criarLista":
        let ul = document.createElement("ul");
        ul.classList.add("carrinhoUl");
        ul.classList.add("p-0");
        containerLista.appendChild(ul);
        break;
      case "adicionar":
        let uL = document.querySelector(".carrinhoUl");
        let li = document.createElement("li");
        let p = document.createElement("p");
        p.classList.add("carrinhoP");
        p.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ice-cream-cone"><path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"/><path d="M17 7A5 5 0 0 0 7 7"/><path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"/></svg> ${produto} <svg class="btnRemoveCar" onclick="carrinho.removerProduto('${produto}', event)" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>`;
        li.classList.add("carrinhoLi");
        li.appendChild(p);
        uL.appendChild(li);
        break;

      case "apagarD":

        let P = event.target.parentNode;
        P.remove();
        break;

      case "apagarT":
        break;
    }
  }
}

const carrinho = new Carrinho();
