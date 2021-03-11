const inputText = document.getElementById('carta-texto');
const btnText = document.getElementById('criar-carta');
const paragraphText = document.getElementById('carta-gerada');
const countParagraph = document.getElementById('carta-contador');

// generate Classes

const generateClasses = (span) => {
  const arrClasses = [
    ['newspaper', 'magazine1', 'magazine2'],
    ['medium', 'big', 'reallybig'],
    ['rotateleft', 'rotateright'],
    ['skewleft', 'skewright'],
  ];

  const numberOfClasses = Math.floor(Math.random() * (4 - 2 + 1) + 2);
  let count = 4;

  for (let i = 1; i <= numberOfClasses; i += 1) {
    const classesGroup = Math.floor(Math.random() * count);
    handleSwitch(classesGroup, arrClasses, span);
    count -= 1;
  }
};

// counter words

const countWords = (input) => {
  const counter = input.filter((i) => i !== '');
  countParagraph.innerText = counter.length;
  return counter;
};

const createLetter = () => {
  paragraphText.innerText = '';

  const input = inputText.value;

  if (!input.replace(/\s/g, '').length) {
    paragraphText.innerText = 'Por favor, digite o conteúdo da carta.';
  }

  const inputArr = input.split(' ');

  const inputData = countWords(inputArr);

  for (let i = 0; i < inputData.length; i += 1) {
    const span = document.createElement('span');
    span.innerText = inputData[i];
    paragraphText.appendChild(span);
    generateClasses(span);
  }
};

btnText.addEventListener('click', createLetter);
inputText.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    createLetter();
  }
});
