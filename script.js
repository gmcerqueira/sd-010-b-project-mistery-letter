const letterInput = document.querySelector('#carta-texto');
const createBtn = document.querySelector('#criar-carta');
const letterContainer = document.querySelector('#carta-gerada');

function createLetter() {
  const words = letterInput.value.trim().split(' ');
  console.log(words);
  if (!letterInput.value.trim()) {
    letterContainer.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  // Esse é um teste!
  for (let i = 0; i < words.length; i += 1) {
    const word = document.createElement('span');
    word.innerHTML = words[i];
    letterContainer.appendChild(word);
  }
}

window.onload = () => {
  createBtn.addEventListener('click', createLetter);
};
