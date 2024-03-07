function abrirOpt(event) {
  const opts = document.querySelectorAll(".opt");

  opts.forEach((opt) => {
    if (opt.classList.contains("act") && event.target !== opt) {
      opt.classList.remove("act");
    }
  });

  if (event.target.classList.contains("act")) {
    event.target.classList.remove("act");
  } else {
    event.target.classList.add("act");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  menuMove();

  function menuMove() {
    let lastScrollTop = 0;
    let verificaTop = false;
    window.addEventListener(
      "scroll",
      function () {
        let currentScroll =
          window.pageYOffset || document.documentElement.scrollTop;
        const header = document.querySelector(".navbar");
        if (currentScroll > lastScrollTop) {
          header.classList.add("closed");
          verificaTop = false;
        } else {
          if (verificaTop) {
            header.classList.remove("closed");
          }
          verificaTop = true;
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      },
      false
    );
  }
});
