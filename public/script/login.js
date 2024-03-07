function login(event) {
  if (event.target.innerText == "Login") {
    runAnimations()
      .then(() => {
        let divLogin = document.querySelector(".container-content-login");
        divLogin.classList.remove("d-none");
      })
      .catch((error) => {
        console.error("Ocorreu um erro durante as animações:", error);
      });
      

    event.target.innerText = "Cadastrar-se";
  } else {
    runReverseAnimations()
      .then(() => {
        let divLogin = document.querySelector(".container-content-create");
        divLogin.classList.remove("d-none");
      })
      .catch((error) => {
        console.error("Ocorreu um erro durante as animações:", error);
      });
    event.target.innerText = "Login";
  }
}

function runReverseAnimations() {
  return new Promise((resolve, reject) => {
    let url = window.location.href;

    if (url.indexOf("erro=true") != -1 ) {

      let erro = document.querySelector(".erro");
      erro.classList.add("entrarAnimacao");
      erro.classList.remove("sairAnimacao");

    }
    
    if(url.indexOf("erroL=true") != -1){
      
      let erro = document.querySelector(".erroL");
      erro.classList.remove("entrarAnimacao");
      erro.classList.add("sairAnimacao");
    
    }

    let p = document.querySelector(".banner-p");
    p.innerHTML = "Faça login e venha experimentar os melhores sorvetes do país";
    let title = document.querySelector(".container-login-title");
    title.classList.remove("entrarAnimacao");
    title.classList.add("sairAnimacao");

    let text = document.querySelector(".container-login-text");
    text.classList.remove("entrarAnimacao");
    text.classList.add("sairAnimacao");

    let li = document.querySelectorAll(".li");
    let lbl = document.querySelectorAll(".lbl");

    li.forEach((i) => {
      i.classList.remove("entrarAnimacao");
      i.classList.add("sairAnimacao");
    });

    lbl.forEach((l) => {
      l.classList.remove("entrarAnimacao");
      l.classList.add("sairAnimacao");
    });

    let btnl = document.querySelector(".btnl");
    btnl.classList.remove("entrarAnimacao");
    btnl.classList.add("sairAnimacao");

    setTimeout(() => {
      let div = document.querySelector(".container-content-login");
      div.classList.add("d-none");

      title.classList.add("entrarAnimacao");
      title.classList.remove("sairAnimacao");
      text.classList.add("entrarAnimacao");
      text.classList.remove("sairAnimacao");

      li.forEach((i) => {
        i.classList.add("entrarAnimacao");
        i.classList.remove("sairAnimacao");
      });

      lbl.forEach((l) => {
        l.classList.add("entrarAnimacao");
        l.classList.remove("sairAnimacao");
      });

      btnl.classList.add("entrarAnimacao");
      btnl.classList.remove("sairAnimacao");

      resolve(); // Resolvendo a Promise após a conclusão das animações
    }, 800);
  });
}

function runAnimations() {
  return new Promise((resolve, reject) => {
    let url = window.location.href;
    if (url.indexOf("erro=true") != -1 ) {

      let erro = document.querySelector(".erro");
      erro.classList.remove("entrarAnimacao");
      erro.classList.add("sairAnimacao");
    }
    
    if(url.indexOf("erroL=true") != -1){
      
      let erro = document.querySelector(".erroL");
      erro.classList.add("entrarAnimacao");
      erro.classList.remove("sairAnimacao");
    }
    
    let p = document.querySelector('.banner-p');
    p.innerHTML = "Faça seu cadastro e venha ser experimentar os melhores sorvetes do país!";
    let title = document.querySelector(".container-create-title");
    title.classList.remove("entrarAnimacao");
    title.classList.add("sairAnimacao");

    let text = document.querySelector(".container-create-text");
    text.classList.remove("entrarAnimacao");
    text.classList.add("sairAnimacao");

    let ci = document.querySelectorAll(".ci");
    let lbc = document.querySelectorAll(".lbc");

    ci.forEach((i) => {
      i.classList.remove("entrarAnimacao");
      i.classList.add("sairAnimacao");
    });

    lbc.forEach((l) => {
      l.classList.remove("entrarAnimacao");
      l.classList.add("sairAnimacao");
    });

    let btnc = document.querySelector(".btnc");
    btnc.classList.remove("entrarAnimacao");
    btnc.classList.add("sairAnimacao");

    setTimeout(() => {
      let div = document.querySelector(".container-content-create");
      div.classList.add("d-none");

      title.classList.add("entrarAnimacao");
      title.classList.remove("sairAnimacao");
      text.classList.add("entrarAnimacao");
      text.classList.remove("sairAnimacao");

      ci.forEach((i) => {
        i.classList.add("entrarAnimacao");
        i.classList.remove("sairAnimacao");
      });

      lbc.forEach((l) => {
        l.classList.add("entrarAnimacao");
        l.classList.remove("sairAnimacao");
      });

      btnc.classList.add("entrarAnimacao");
      btnc.classList.remove("sairAnimacao");

      resolve(); // Resolvendo a Promise após a conclusão das animações
    }, 800);
  });
}

// Chamando a função e usando .then() para executar código após as animações serem concluídas
