const inputName = document.querySelector('#input-name');
const inputComent = document.querySelector('#input-comentario');
const botonEnviar = document.querySelector('#botonEnviar');


const listaDeComentarios = []

botonEnviar.addEventListener('click', (event) => {
    event.preventDefault();
    let inputValue =  inputName.value
    let inputDosValue = inputComent.value
   
    let opinion = {
        nombre: inputName.value,
        comentario: inputComent.value
    }
    
    listaDeComentarios.push(opinion)
    console.log(listaDeComentarios)
    inputName.value = ""
    inputComent.value = ""
});


function updateTime() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
  
    document.getElementById('time').innerHTML = `${hours}:${minutes}:${seconds}`;
  }
  
  setInterval(updateTime, 1000);


