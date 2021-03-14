const input = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const paragraph = document.getElementById('carta-gerada');
let arrayWords = [];

function clearSpans() {
  paragraph.innerHTML = '';
}

function pushWords() {
  let words = '';
  for (let x = 0; x <= input.value.length; x += 1) {
    if (input.value[x] !== ' ' && x !== input.value.length) {
      words += input.value[x];
    } else {
      arrayWords.push(words);
      words = '';
    }
  }
}

function clearArray() {
  if (arrayWords.length > 0) {
    arrayWords = [];
    pushWords();
  } else {
    pushWords();
  }
}

function insertWords() {
  for (let counter = 0; counter < arrayWords.length; counter += 1) {
    paragraph.appendChild(document.createElement('span'));
    paragraph.lastChild.innerText = arrayWords[counter];
  }
}

function classNewspaper() {
  const createDiv = document.createElement('div');
  paragraph.appendChild(createDiv);
  createDiv.style.backgroundColor = 'rgb(250, 235, 215)';
  createDiv.style.fontFamily = 'Times New Roman';
  createDiv.style.fontWeight = '700';

}

function functionsButton() {
  if (input.value === '' || input.value === ' ') {
    paragraph.innerHTML = 'Por favor, digite o conteúdo da carta.';
  } else {
    clearSpans();
    classNewspaper();
    clearArray();
    insertWords();
  }
}

function pressButton() {
  button.addEventListener('click', () => {
    functionsButton();
  });
}

window.onload = function startScript() {
  pressButton();
};
