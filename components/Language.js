const setIdioma = async (language) => {
  const response = await fetch(`./lang/${language}.json`).then(response => response.json())
  data.language = response;

}

const changeLanguage = (idioma) => {
  cookie.setCookie('language', idioma);
  window.location.reload()
}