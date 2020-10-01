const loader = document.createElement('div')
const loading = document.createElement('div')
const icon = document.querySelector('.menu-bar')
const menu = document.querySelector('.main-nav')

//=== functions =====

const appendLoaderToBody = () => {
  document.body.appendChild(loader);
}
const removeLoader = () => {
  document.body.removeChild(loader)
}
appendLoaderToBody()
// execute loader
const executeLoader = (e) => {
  removeLoader()
}

const showMenu = (e) => {
  menu.classList.toggle('d-flex')
}


// == add classes to elements
loader.classList.add('loader')
loading.classList.add('loading')

loader.appendChild(loading)

// == events
window.addEventListener('load', executeLoader);
icon.addEventListener('click', showMenu)
