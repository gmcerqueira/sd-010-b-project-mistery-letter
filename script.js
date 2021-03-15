let inpCartaTexto = document.getElementById('carta-texto');
let pCartaGerada = document.getElementById('carta-gerada');
const buttonCriarCarta = document.getElementById('criar-carta');

buttonCriarCarta.addEventListener('click', function() {
  function spaceWhiteOrEmpty(input) {
    let cont = 1;
    let messege = null;
   for (let i = 0; i < input.length; i += 1) {
       if(input[i] === ' '){
           cont += 1;
           if(cont === input.length) {
             messege = true
           }
       }
   }
   if (input === ' ') {
     messege = true;
   }
   if (input === '') {
       messege = true;
   }

   if (messege) {
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