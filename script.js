let btn = document.getElementById('criar-carta')
let input = document.getElementById('carta-texto')
let output = document.getElementById('carta-gerada')
let styleGroup = ['newspaper', 'magazine1', 'magazine2']
let sizeGroup = ['medium', 'big', 'reallybig']
let rotationGroup = ['rotateleft', 'rotateright']
let skewGroup = ['skewleft', 'skewright']

function createEl(tagName) {
  let element = document.createElement(tagName)
  return element
}

function getRandom(array) {
  let len = array.length
  let index = Math.floor(Math.random() * len)
  return array[index]
}

// Utilizei código de JONATHAN ROCHA como referência para esta função
// https://github.com/tryber/sd-010-b-project-mistery-letter/pull/5/commits/5fa6ea9e42310b385982a4dc7fa700320046e8cd 
function generateTxt() {
  output.innerHTML = ""
  let txt = input.value.replace(/  +/g, ' ').trim()
  if(txt && txt!==" "){
    let arr = txt.split(' ')
    arr.forEach( word => {
      let span = createEl('span')
      span.innerText = `${word}`
      let classes = [getRandom(styleGroup), getRandom(sizeGroup), getRandom(rotationGroup), getRandom(skewGroup)].join(' ')
      span.className = classes
      output.appendChild(span)
    })
  } else {
    output.innerText = "Por favor, digite o conteúdo da carta."
  }
}

btn.addEventListener('click', generateTxt)