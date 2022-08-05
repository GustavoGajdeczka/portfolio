const data = {
  language: 'pt-br',
}

window.onload = () => {
  const lib = getCookie('library')
  for (let index = 0; index < 4; index++) {
    image = document.querySelector(`.image${index + 1}`).src = `./${lib}.svg`
  }
}

const setIdioma = async (language) => {
  const response = await fetch(`./lang/${language}.json`).then(response => response.json())
  data.language = response;

}

const changeLanguage = (idioma) => {
  setCookie('language', idioma);
  window.location.reload()
}

const setCookie = (name, value) => {
  document.cookie = `${name}=${value}`
}
const getCookie = (name) => {
  let value = `; ${document.cookie}`;
  let partes = value.split(`; ${name}=`);
  if(partes.length == 2) return partes.pop().split(';').shift();
}

const changeLibrary = (library) => {
  setCookie('library', library);
  window.location.reload()
}

const libraryColors = () => {
  const library = getCookie('library');
  switch (library) {
    case 'vue':
      return '#34495e, #41b883'
    case 'react':
      return '#b1fcfc, #61dbfb'
  }
}