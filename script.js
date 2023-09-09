
function Mudar(color) {
    document.body.style.background = color
    if (color == 'yellow' || color == 'pink' || color == 'cyan') {
        cima.style.color = 'black'
    } else {
        cima.style.color = 'white'
    }

    if (color == 'black') {
        maior.style.border = '5px solid white'
    } else {
        maior.style.border = '5px solid black' 
    }
    frase.style.display = 'none'
}

  function Didi() {
    document.body.style.background = 'white'
    cima.style.color = 'black'
    frase.style.display = 'block'
  }