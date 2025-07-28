const inputNome = document.querySelector("#input-nome");
const botao = document.querySelector("#validar");
const p = document.querySelector("#error");

botao.addEventListener("click", function(){
    
    let nome = inputNome.value;

    if (nome === ""){
        p.style.display = "block";
        p.innerHTML = "Por favor, digite seu nome";
    }else{
        p.style.display = "none";
        p.textContent = "";
    }
    
});