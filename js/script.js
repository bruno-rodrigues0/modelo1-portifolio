var hover = document.querySelectorAll(".hoverlink");
var bg = document.querySelectorAll(".bg-img");
var zoom = document.querySelectorAll(".row-projetos > a");

hover.forEach((element, index) => {
  element.addEventListener("mouseenter", function () {
    bg[index].classList.add("noblur");
    zoom[index].classList.add("zoomin");
});

element.addEventListener("mouseout", function () {
    bg[index].classList.remove("noblur");
    zoom[index].classList.remove("zoomin");
  });
});
