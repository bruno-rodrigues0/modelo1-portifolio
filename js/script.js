var hover = [...document.querySelectorAll(".sobreposto")]
var bg = [...document.querySelectorAll(".bg-img")]
var zoom = [...document.querySelectorAll(".row-projetos > a")]

hover.map((item, index) => {
  item.addEventListener("mouseenter", () => {
    bg[index].classList.add("noblur");
    zoom[index].classList.add("zoomin");
  });

  item.addEventListener("mouseout", () => {
    bg[index].classList.remove("noblur");
    zoom[index].classList.remove("zoomin");
  });
});
