let inpCartaTexto = document.getElementById('carta-texto');
let pCartaGerada = document.getElementById('carta-gerada');
const buttonCriarCarta = document.getElementById('criar-carta');

buttonCriarCarta.addEventListener('click', function() {
  pCartaGerada.innerHTML = '';
  let spans = [];
  spans = inpCartaTexto.value.split(' ');
  for (let index = 0; index < spans.length; index += 1) {
    span = document.createElement('span');
    span.innerText = spans[index];
    pCartaGerada.appendChild(span);
  }

});