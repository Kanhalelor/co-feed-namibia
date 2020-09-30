const loader = document.createElement('div')
const loading = document.createElement('div')

//=== functions =====

// append loader
const appendLoaderToBody = () => {
  document.body.appendChild(loader);
}
appendLoaderToBody()

// remove loader
const removeLoader = () => {
  document.body.removeChild(loader)
}

// execute loader
const executeLoader = (e) => {
  removeLoader()
}

// == add classes to newly created elements

loader.classList.add('loader')
loading.classList.add('loading')

loader.appendChild(loading)

// == events
window.addEventListener('load', executeLoader);
