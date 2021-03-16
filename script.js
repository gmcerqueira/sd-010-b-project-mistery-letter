const newLetterButton = document.getElementById('criar-carta');
const inputLetter = document.getElementById('carta-texto');
const outputLetter = document.getElementById('carta-gerada');

function generateLetter() {
  newLetterButton.addEventListener('click', () => {
    if (inputLetter.value === null || inputLetter.value === '') {
      outputLetter.innerHTML = 'Por favor, digite o conteúdo da carta.';
    } else {
      outputLetter.innerHTML = inputLetter.value;
    }
  });
}
generateLetter();
