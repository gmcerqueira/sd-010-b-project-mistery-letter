// elements
const createLetterBtn = document.querySelector('#criar-carta');
const createLetterText = document.querySelector('#carta-texto');
const generatedLetter = document.querySelector('#carta-gerada');

//                     Aux Functions

const getArrayFromString = (string) => string.split(' ');

//                      Listeners

// Create Letter Button Listener

const setCreateLetterBtn = () => {
  createLetterBtn.addEventListener('click', () => {
    const phrase = createLetterText.value;
    getArrayFromString(phrase).forEach((word) => {
      const spanEl = document.createElement('span');
      spanEl.innerText = `${word}`;
      spanEl.innerText = ' ';
      generatedLetter.appendChild(spanEl);
    });
  });
};

//                    Loader
const loadButtons = () => {
  setCreateLetterBtn();
};

window.onload = () => {
  loadButtons();
};
