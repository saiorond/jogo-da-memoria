const input = document.querySelector(".login_input"); 
const botao = document.querySelector(".login_button");
const form = document.querySelector(".container")

const validarInput = ({target}) => {
    if (target.value.length > 2) {
        botao.removeAttribute('disabled')
        return
    } 
        
    botao.setAttribute('disabled', '')
}

const eviandoFormulario = (event) => {
    event.preventDefault();
    localStorage.setItem('player', input.value);
    window.location = 'paginas/jogo.html';
}

input.addEventListener("input", validarInput);
form.addEventListener("submit", eviandoFormulario)