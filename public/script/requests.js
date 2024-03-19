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
