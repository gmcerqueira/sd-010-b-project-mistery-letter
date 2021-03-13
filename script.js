function splitText() {
  const textInput = document.getElementById('carta-texto').value;
  const textArray = textInput.split(' ');
  return textArray;
}

function checkSpaces(input) {
  const inputArray = input;
  for (let index = 0; index < inputArray.length; index += 0) {
    if (inputArray[index] === '') {
      inputArray.shift();
    }
  }
  return inputArray;
}

function validateInput() {
  const textInput = document.getElementById('carta-texto').value;
  const paragraph = document.getElementById('carta-gerada');
  let inputArray = splitText();
  inputArray = checkSpaces(inputArray);
  if (textInput.length === 0 || inputArray.length === 0) {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    paragraph.innerText = '';
  }
}

function generateLetter() {
  validateInput();
  const words = splitText();
  const parent = document.getElementById('carta-gerada');
  for (let index = 0; index < words.length; index += 1) {
    const newSpan = document.createElement('span');
    newSpan.innerText = words[index];
    parent.appendChild(newSpan);
  }
  // console.log(words);
}

document.getElementById('criar-carta').addEventListener('click', generateLetter);
