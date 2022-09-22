const input = document.querySelector(".login_input"); 
const botao = document.querySelector(".login_button");

const validarInput = ({target}) => {
    if (target.value.length > 2) {
        botao.removeAttribute('disabled')
    } else {
        botao.setAttribute('disabled', '')
    }
}

input.addEventListener("input", validarInput)