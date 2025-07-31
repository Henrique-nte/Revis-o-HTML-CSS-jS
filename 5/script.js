const botao = document.querySelector("#alternar-tema-btn");
const body = document.querySelector("body");

botao.addEventListener("click", function () {
  body.classList.toggle("dark-theme");
  console.log(body);
});
