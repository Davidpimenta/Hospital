function abrirOpt(event) {
  const opts = document.querySelectorAll(".opt");

  opts.forEach((opt) => {

    if(opt.classList.contains("act") && event.target !== opt){
      opt.classList.remove("act");
      let div_opt_act = document.querySelector(".div-opt-act");
      div_opt_act.classList.remove("div-opt-act");
    }
  
  });
  
  if (event.target.classList.contains("act")) {
   
    event.target.classList.remove("act");
    let div = document.querySelector(".container-dst");
    div.classList.remove("container-act");
    div.classList.remove("py-4");

    let div_opt_act = document.querySelector(".div-opt-act");
    div_opt_act.classList.remove("div-opt-act");
  
  } else {
    event.target.classList.add("act");
   
    let div = document.querySelector(".container-dst");

    switch (event.target.innerHTML) {
      case "Nossos médicos":
        let tb_medicos = document.querySelector(".tb_medicos");
        div.classList.add("container-act");
        div.classList.add("py-4");
        tb_medicos.classList.add("div-opt-act");

        break;

      case "Nossos serviços":
        let tb_servicos = document.querySelector(".tb_servicos");
        div.classList.add("container-act");
        div.classList.add("py-4");
        tb_servicos.classList.add("div-opt-act");

        break;
    }
  }

}
