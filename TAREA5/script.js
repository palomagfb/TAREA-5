let number = 0;
let data = null; // Variable para almacenar los datos obtenidos de ajax.json
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
      data = JSON.parse(request.responseText); // Almacenar los datos obtenidos en 'data'
      changeVideo(); // Llamar a changeVideo() después de obtener los datos por primera vez
    }
  }
  request.open("GET", "ajax.json");
  request.send();
}

function changeVideo() {
  if (!data) {
    getData(); // Obtener datos si aún no se han cargado
    return;
  }

  titleArea.innerHTML = data[number].title;
  contentArea.innerHTML = data[number].content;
  videoArea.setAttribute("src", data[number].url);

  number = (number + 1) % data.length; // Incrementar 'number' circularmente
}

button.addEventListener('click', changeVideo); // Listener para el botón "Cambiar video"
window.onload = getData; // Obtener datos al cargar la página por primera vez