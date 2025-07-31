const input1 = document.querySelector("#numero1");
const input2 = document.querySelector("#numero2");
const select = document.querySelector("#operacao-select");
const botao = document.querySelector("#calcular-btn");
const paragrafo = document.querySelector("#resultado-calculadora");

botao.addEventListener("click", function () {
  numero1 = Number(input1.value);
  numero2 = Number(input2.value);

  let operacao = select.value;

  let resultado;

  switch (operacao) {
    case "+":
      resultado = numero1 + numero2;
      return (paragrafo.textContent = `Resultado: ${resultado}`);
    case "-":
      resultado = numero1 - numero2;
      return (paragrafo.textContent = `Resultado: ${resultado}`);
    case "*":
      resultado = numero1 * numero2;
      return (paragrafo.textContent = `Resultado: ${resultado}`);
    case "/":
      if (numero1 && numero2 !== 0) {
        resultado = numero1 / numero2;
        return (paragrafo.textContent = `Resultado: ${resultado}`);
      } else return (paragrafo.textContent = `Erro: Divisão por 0`);

    default:
      return (paragrafo.textContent = "Opção inválida");
  }
});
