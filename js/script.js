var hover = document.querySelectorAll(".hoverlink");
var bg = document.querySelectorAll(".bg-img");
var zoom = document.querySelectorAll(".row-projetos > a");

// forEach irá chamar uma função entregando ate 3 parametros
// o primeiro parametro será o elemento atual do array
// o segundo é o indice desse elemento
// o terceiro é o array inteiro
// apenas o primeiro parametro é obrigatório
// a seguinte função passa por todos os elementos do array hover e adiciona um eventListener, guardando também a informação do seu indice que será utilizado para indicar qual elemento ira sofre a ação da função.

hover.forEach((element, index) => {
  element.addEventListener("mouseenter", () => {
    bg[index].classList.add("noblur");
    zoom[index].classList.add("zoomin");
  });

  element.addEventListener("mouseout", () => {
    bg[index].classList.remove("noblur");
    zoom[index].classList.remove("zoomin");
  });
});
