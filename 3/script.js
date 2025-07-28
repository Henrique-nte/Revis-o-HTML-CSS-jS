const novo = document.querySelector("#novo-item-input");
const botao = document.querySelector("#adicionar-btn");
const novoItemsta = document.querySelector("#minha-lista");

botao.addEventListener("click", function(){
    let valorItem = novo.value;
    //Verifique se o input não está vazio antes de adicionar.
    if (valorItem !== ""){
        let novoItem = document.createElement("li");
        
        li.textContent  = valorItem;

        lista.appendChild(novoItem);
    }
    input.value = '';
    
});