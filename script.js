const newLetterButton = document.getElementById('criar-carta');
const inputLetter = document.getElementById('carta-texto');
const outputLetter = document.getElementById('carta-gerada');

function generateLetter() {
  newLetterButton.addEventListener('click', () => {
    if (inputLetter.value !== '' || inputLetter === null) {
      outputLetter.innerHTML = '';
      const arrayString = inputLetter.value.split(' ');
      for (let index = 0; index < arrayString.length; index += 1) {
        const spanWord = document.createElement('span');
        spanWord.innerHTML = `${arrayString[index]}`;
        outputLetter.appendChild(spanWord);
      }
    } else {
      outputLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
    }
  });
}
generateLetter();
