const setCookie = (name, value) => {
  document.cookie = `${name}=${value}`
}
const getCookie = (name) => {
  let value = `; ${document.cookie}`;
  let partes = value.split(`; ${name}=`);
  if(partes.length == 2) return partes.pop().split(';').shift();
}