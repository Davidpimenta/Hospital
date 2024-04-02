const imgsCard = document.querySelectorAll(".imgHidden");

imgsCard.forEach((img) => {
  img.addEventListener("mouseenter", (event) => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      if (event.target == card.querySelector(".imgHidden")) {
        const cardBody = card.querySelector(".card-body");

        // Calcula a diferença entre a altura da imagem e a altura desejada do card-body
        const heightDiff = img.clientHeight - 170;

        // Adiciona a classe 'marginTopCardBody' ao card-body
        cardBody.style.paddingTop = heightDiff + "px";

        // Adiciona uma transição suave à mudança
        cardBody.style.transition = "padding-top 0.5s 0.1s ease-in-out";
      }
    });
  });

  img.addEventListener("mouseleave", (event) => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      if (event.target == card.querySelector(".imgHidden")) {
        const cardBody = card.querySelector(".card-body");
        const heightDiff = 16;

        cardBody.style.paddingTop = heightDiff + "px";

        cardBody.style.transition = "padding-top 0.5s ease-in-out";
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
      this.mudancaDoCarrinho("criarLista");
    }

    console.log(produto);
    this.carrinho.push(produto);
    this.mudancaDoCarrinho("adicionar", "", produto[0]);
  }

  removerProduto(produto, event) {
    this.mudancaDoCarrinho("apagarD", event);
    for (let i = 0; i < this.carrinho.length; i++) {
      if (this.carrinho[i][0] == produto) {
        this.carrinho.splice(i, 1);
      }
    }

    if (this.carrinho.length == 0) {
      const carrinhoBtn = document.querySelector(".carrinhoBtn");
      const btnClose = document.querySelector(".btn-close");
      btnClose.click();
      carrinhoBtn.classList.add("d-none");
    }
  }

  removerProdutos() {
    this.mudancaDoCarrinho("apagarT");
    this.carrinho = [];
    const carrinhoBtn = document.querySelector(".carrinhoBtn");
    const btnClose = document.querySelector(".btn-close");
    btnClose.click();
    carrinhoBtn.classList.add("d-none");
  }

  fazerPedido() {
    const form = document.createElement("form");
    form.setAttribute("method", "POST");
    form.setAttribute("action", "/request");

    for (let i = 0; i < this.carrinho.length; i++) {
      const pedidos = document.createElement("input");
      pedidos.setAttribute("type", "text");
      pedidos.setAttribute("name", i);
      pedidos.setAttribute("value", this.carrinho[i]);
      form.appendChild(pedidos);
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

        let svgSorvete =
          '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ice-cream-cone"><path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11"/><path d="M17 7A5 5 0 0 0 7 7"/><path d="M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4"/></svg>';

        let svgFecharButton = `<button class="btnRemovePedido" onclick="retirarPedido(event)"><svg class="svgCloseBtn" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg></button>`;

        p.classList.add("carrinhoP");

        p.innerHTML = `${svgSorvete} ${produto} ${svgFecharButton}`;
        li.classList.add("carrinhoLi");
        li.appendChild(p);
        uL.appendChild(li);

        break;

      case "apagarD":
        let removerBtn = event.target;
        let P = removerBtn.parentNode;
        P.remove();
        break;

      case "apagarT":
        let btns = document.querySelectorAll(".btnRemovePedido");
        btns.forEach((btn) => {
          let P = btn.parentNode;
          P.remove();
        });
        break;
    }
  }
}

function retirarPedido(event) {
  carrinho.removerProduto(event.target.parentNode.textContent, event);
}

const carrinho = new Carrinho();
