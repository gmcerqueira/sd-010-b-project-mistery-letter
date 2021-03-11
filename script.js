const inputText = document.getElementById('carta-texto');
const btnText = document.getElementById('criar-carta');
const paragraphText = document.getElementById('carta-gerada');

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
