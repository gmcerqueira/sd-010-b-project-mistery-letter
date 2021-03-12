const letterInput = document.querySelector('#carta-texto');
const createBtn = document.querySelector('#criar-carta');
const letterContainer = document.querySelector('#carta-gerada');

const styles = [
  'newspaper',
  'magazine1',
  'magazine2',
  'medium',
  'big',
  'reallybig',
  'rotateleft',
  'rotateright',
  'skewleft',
  'skewright',
];
// const styles = ['newspaper', 'magazine1', 'magazine2'];
// const sizes = ['medium', 'big', 'reallybig'];
// const rotations = ['rotateleft', 'rotateright'];
// const inclinations = ['skewleft', 'skewright'];
function randomNumber(max) {
  return Math.floor(Math.random()*max);
}
// function randomClasses() {
//   const classes = [];
//   const style = styles[randomNumber(styles.length + 2)];
//   const size = sizes[randomNumber(sizes.length + 2)];
//   const rotation = rotations[randomNumber(rotations.length + 2)];
//   const inclination = inclinations[randomNumber(rotations.length + 2)];

//   if (style) classes.push(style);
//   if (size) classes.push(size);
//   if (rotation) classes.push(rotation);
//   if (inclination) classes.push(inclination);

//   return classes.join(' ');
// }

function createLetter() {
  letterContainer.innerHTML = '';
  const words = letterInput.value.trim().split(' ');
  if (!letterInput.value.trim()) {
    letterContainer.innerHTML = 'Por favor, digite o conteúdo da carta.';
    return;
  }
  // Esse é um teste!
  for (let i = 0; i < words.length; i += 1) {
    const word = document.createElement('span');
    const size = styles.length;
    word.classList.add(styles[randomNumber(size)], styles[randomNumber(size)], styles[randomNumber(size)]);
    word.innerHTML = words[i];
    letterContainer.appendChild(word);
  }
}

window.onload = () => {
  createBtn.addEventListener('click', createLetter);
};
