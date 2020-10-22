window.onload = () => {
  addObservers()
}

const addObservers = () => {
  const selects = document.querySelectorAll('select')
  selects.forEach(select => select.addEventListener('change', onSelectChange))

  document.querySelector('.add').addEventListener('click', addSquare)
  document.querySelector('.remove').addEventListener('click', removeSquare)
}

const onSelectChange = e => {
  const playground = document.querySelector('.playground')
  const classList = playground.classList

  for (const className of classList) {
    if (new RegExp(e.target.id).test(className)) {
      playground.classList.remove(className)
    }
  }

  playground.classList.add(`${e.target.id}-${e.target.value}`)
}

const addSquare = () => {
  const playground = document.querySelector('.playground')

  if (playground.childElementCount < 20) {
    const square = document.createElement('div')
    square.classList = 'square'
    square.textContent = playground.childElementCount + 1
    playground.appendChild(square)
  }
}

const removeSquare = () => {
  const playground = document.querySelector('.playground')

  if (playground.lastElementChild) {
    playground.removeChild(playground.lastElementChild)
  }
}
