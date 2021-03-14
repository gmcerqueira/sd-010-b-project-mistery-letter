let inpCartaTexto = document.getElementById('carta-texto');
let pCartaGerada = document.getElementById('carta-gerada');
const buttonCriarCarta = document.getElementById('criar-carta');

buttonCriarCarta.addEventListener('click', function() {
    let text = inpCartaTexto.value;
  text += ' ';
  let word = '';
  let cont = 0;

    for (let index = 0; index < text.length; index += 1) {
        word += text[index];
      if (text[index]===' ') {
        console.log(word);
        let span = document.createElement('span');
        span.setAttribute('id', cont += 1);
        span.innerText = word;
        pCartaGerada.appendChild(span);
        word = '';
      }
    }
});