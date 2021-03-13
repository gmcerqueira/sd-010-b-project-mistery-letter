function splitText() {
  const textInput = document.getElementById('carta-texto').value;
  const textArray = textInput.split(' ');
  return textArray;
}

function generateLetter() {
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
