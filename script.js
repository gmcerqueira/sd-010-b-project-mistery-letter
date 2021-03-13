const styles = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];

function numberOfClasses() {
  let numberOfStyleClasses = Math.ceil(Math.random() * 4);
  while (numberOfStyleClasses === 1) {
    numberOfStyleClasses = Math.ceil(Math.random() * 4);
  }
  return numberOfStyleClasses;
}
console.log(numberOfClasses());

function splitText() {
  const textInput = document.getElementById('carta-texto').value;
  const textArray = textInput.split(' ');
  return textArray;
}

function chooseClass() {
  const typeOfClass = numberOfClasses();
  
}

function generateLetter() {
  const parent = document.getElementById('carta-gerada');
  const words = splitText();
  for (let index = 0; index < words.length; index += 1) {
    const span = document.createElement('span');
    span.innerText = words[index];
    parent.appendChild(span);
  }

}

document.getElementById('criar-carta').addEventListener('click', generateLetter);
