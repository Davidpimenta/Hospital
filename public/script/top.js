function abrirOpt(event) {
  const opts = document.querySelectorAll(".opt");
  console.log(event.target.classList);

  if (event.target.classList[10] == "act") {
    event.target.classList.remove("act");
  } else {
    event.target.classList.add("act");
  }

  opts.forEach((opt) => {
    event.target === opt ? null : opt.classList.remove("act");
  });
}
