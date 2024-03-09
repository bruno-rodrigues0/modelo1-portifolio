var hover = document.querySelectorAll(".hoverlink");
var bg = document.querySelectorAll(".bg-img");

hover.forEach((element, index) => {
  element.addEventListener("mouseenter", function () {
    bg[index].classList.add("noblur");
  });

  element.addEventListener("mouseout", function () {
    bg[index].classList.remove("noblur");
  });
});
