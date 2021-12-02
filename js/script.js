document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close");

  hamburger.addEventListener("click", () => {
    menu.classList.add("active");
  });

  closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
  });

  const counters = document.querySelectorAll(".skills__ratings-counter"),
    lines = document.querySelectorAll(".skills__ratings-line span");

  counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  const boxes = document.querySelectorAll(".box");

  window.addEventListener("scroll", checkBoxes);

  checkBoxes();

  function checkBoxes() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    boxes.forEach(box => {
      const boxTop = box.getBoundingClientRect().top;

      if (boxTop < triggerBottom) {
        box.classList.add("show");
      } else {
        box.classList.remove("show");
      }
    });
  }
});
