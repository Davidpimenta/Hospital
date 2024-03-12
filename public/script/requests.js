document.addEventListener("DOMContentLoaded", function () {});

function navOpt(event) {
  const opts = document.querySelectorAll(".navOpt");
  const btns = document.querySelectorAll(".navPedidosOpt");

  console.log(event.target.textContent.split(" ")[0]);

  opts.forEach((opt) => {
    if (opt.classList.contains("act")) {
      opt.classList.remove("act");
      opt.classList.add('dst');
    }

    if (opt.classList.value.includes(event.target.textContent.split(" ")[0])) {
      opt.classList.remove("dst");
      opt.classList.add("act");
    }

    if (!opt.classList.contains("act") && !opt.classList.contains("act")) {
      opt.classList.add("dst");
    }
  });
}
