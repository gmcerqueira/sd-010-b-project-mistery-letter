// elements
const createLetterBtn = document.querySelector('#criar-carta');
const createLetterText = document.querySelector('#carta-texto');
const generatedLetter = document.querySelector('#carta-gerada');

//                     Aux Functions
// split string
const getArrayFromString = (string) => string.split(' ');

// check if string is only spaces or empty
const checkContent = (array) => {
  if (!array.join('')) return true;
};

//                      Listeners

// Create Letter Button Listener

const setCreateLetterBtn = () => {
  createLetterBtn.addEventListener('click', () => {
    generatedLetter.innerHTML = '';
    const phrase = createLetterText.value;
    const wordsArray = getArrayFromString(phrase);
    const isEmpty = checkContent(wordsArray);
    if (isEmpty) {
      const spanEl = document.createElement('span');
      spanEl.innerText = 'Por favor, digite o conteúdo da carta.';
      generatedLetter.appendChild(spanEl);
    } else {
      wordsArray.forEach((word) => {
        const spanEl = document.createElement('span');
        spanEl.innerText = `${word}`;
        generatedLetter.appendChild(spanEl);
      });
    }
  });
};

//                    Loader
const loadButtons = () => {
  setCreateLetterBtn();
};

window.onload = () => {
  loadButtons();
};
