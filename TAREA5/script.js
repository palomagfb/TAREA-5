Hacemos referencia al botón Get Info y escuchamos el evento click
documento.getElementById('btnGetInfo').addEventListener('click', () => fetchData());

Hacemos referencia al contenedor para el card 
const cardContainer = documento.getElementById('cardContainer');

función fetchData() {

    Crea números aleatorios para ir modificando el número del personaje
    const randomCharacter = Matemáticas.piso(Matemáticas.aleatorio() * 826);

    // URL de la API de RICK AND MORTY
    const url = 'https://rickandmortyapi.com/api/character/${randomCharacter}'
    // Crea un objeto XMLHTTPRequest
    const api = new XMLHttpRequest();

    // Configurar el tipo de solicitud y la URL
    API.open('GET', url, true);

    Define una función de callback que se ejecuta cuando la solicitud se completa
    API.onreadystatechange = () => {

        // Comprueba el estado del servidor que todo este OK
        Si (api.status === 200 && api.readyState === 4) {

            Procesa la respuesta del servidor 
            const data = JSON.parse(api.responseText);

            consola.log(api.responseText);

            Actualiza e inserta código HTML desde javascript dentro del div con id="cardContainer"
            cardContainer.innerHTML = 
            `
 <div class="card" style="width: 18rem;" >
                <img src="${data.image}" class="card-img-top">
                <div class="card-body">
 <h5 class="título-tarjeta">${datos.nombre}</h5>
 <ul class="grupo-lista">
 <li class="list-group-item">Especie: ${data.especie} </li>
                        <li class="list-group-item">Status: ${data.status} </li>
 <li class="list-group-item">Genero: ${data.género} </li>
                    </ul>
                </div>
            </div>
            `
        }
    };

    Envía la solicitud
    API.Enviar();

}