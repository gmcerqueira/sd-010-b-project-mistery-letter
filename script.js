const inputText = document.querySelector('#carta-texto');
const paragrafoResultado = document.querySelector('#carta-gerada');
const btnGerarCarta = document.querySelector('#criar-carta');
btnGerarCarta.addEventListener('click', () => {
  const palavrasSeparadas = inputText.value.split(' ');
  for (let index = 0; index < palavrasSeparadas.length; index += 1) {
    const spanResultado = document.createElement('span');
    spanResultado.innerHTML = palavrasSeparadas[index];
    paragrafoResultado.appendChild(spanResultado);
  }
});
