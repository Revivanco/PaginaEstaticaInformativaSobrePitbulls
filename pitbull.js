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


