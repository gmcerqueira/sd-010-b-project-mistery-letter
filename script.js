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

// get randomIndexes

const getRandomIndexesFromArray = (array) => {
  const arrayMap = {
    main: Math.floor(Math.random() * array.length),
  };
  for (let index = 0; index < array.length; index += 1) {
    if (typeof (array[index]) === 'object') {
      arrayMap[`sub${index}`] = Math.floor(Math.random() * array[index].length);
    } else {
      arrayMap[index] = 0;
    }
  }
  return arrayMap;
};

// get random class

const getRandomClass = () => {
  const styleGroup = ['newspaper', 'magazine1', 'magazine2'];
  const sizeGroup = ['medium', 'big', 'reallybig'];
  const rotateGroup = ['rotateleft', 'rotateright'];
  const skewGroup = ['skewleft', 'skewright'];
  const group = [styleGroup, sizeGroup, rotateGroup, skewGroup];
  const randomIndexes = getRandomIndexesFromArray(group);
  let allClassList = '';
  for (let index = 0; index <= randomIndexes.main; index += 1) {
    allClassList += `${group[index][randomIndexes[`sub${index}`]]} `;
  }
  return allClassList;
};

// Generate Misterious Letter

const genereteLetter = () => {
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
      const wordClassList = getRandomClass();
      const spanEl = document.createElement('span');
      spanEl.setAttribute('class', wordClassList);
      spanEl.innerText = `${word}`;
      generatedLetter.appendChild(spanEl);
    });
  }
};

//                      Listeners

// Create Letter Button Listener

const setCreateLetterBtn = () => {
  createLetterBtn.addEventListener('click', genereteLetter);
};

//                    Loader
const loadButtons = () => {
  setCreateLetterBtn();
};

window.onload = () => {
  loadButtons();
};
