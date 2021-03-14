let inpCartaTexto = document.getElementById('carta-texto');
let pCartaGerada = document.getElementById('carta-gerada');
const buttonCriarCarta = document.getElementById('criar-carta');

buttonCriarCarta.addEventListener('click', function() {
  function spaceWhiteOrEmpty(input) {
    let cont = 1;
    let messege1 = null;
    let messege2 = null;
   for (let i = 0; i < input.length; i += 1) {
       if(input[i] === ' '){
           cont += 1;
           if(cont === input.length) {
             messege1 = true
           }
       }
   }
   if (input === '') {
       messege2 = true;
   }

   if (messege1 || messege2) {
     return true;
   }
  }
  pCartaGerada.innerHTML = '';
  if (spaceWhiteOrEmpty(inpCartaTexto.value)) {
    pCartaGerada.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    let spans = [];
    spans = inpCartaTexto.value.split(' ');
    for (let index = 0; index < spans.length; index += 1) {
      span = document.createElement('span');
      span.innerText = spans[index];
      pCartaGerada.appendChild(span);
    }
}

});