const cartao = document.querySelector(".cartao-destaque");


cartao.addEventListener("mouseover", function(){
    cartao.classList.add("destacado");
});
cartao.addEventListener("mouseout", function(){
    cartao.classList.remove("destacado");
});