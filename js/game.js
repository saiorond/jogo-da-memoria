const grid = document.querySelector('.grid');
const spanPlayer = document.querySelector('.player')
const timer = document.querySelector('.timer');

const personagens = [
    'a fror dite',
    'E A TIA2',
    'hefestas',
    'Hera cles4',
    'mês dela',
    'Palas atenta1',
    'hera4',
    'po, sei don',
    'TUDO PELOS ARES3',
    'zeus2',
    'A jogador de polo',
    'arte da mis'
]

const criarElemento = (tag, className) => {
    const elemento = document.createElement(tag);
    elemento.className = className;

    return elemento;
}

let primeiraCarta = '';
let segundaCarta = '';

const fimDeJogo = () => {
    const desabilitarCartas = document.querySelectorAll('.acertou');

    if (desabilitarCartas.length === 24) {
        clearInterval(this.loop);
        alert(`Parabéns, ${spanPlayer.innerHTML}! Seu tempo foi: ${timer.innerHTML} segundos.`);
    }
}

const checarCarta = () => {
    const primeiroPersonagem = primeiraCarta.getAttribute('data-personagem');
    const segundoPersonagem = segundaCarta.getAttribute('data-personagem');

    if (primeiroPersonagem === segundoPersonagem) {
        primeiraCarta.firstChild.classList.add('acertou');
        segundaCarta.firstChild.classList.add('acertou');

        primeiraCarta = '';
        segundaCarta = '';

        fimDeJogo();

    } else {
        setTimeout(() => {

            primeiraCarta.classList.remove('revelar-carta');
            segundaCarta.classList.remove('revelar-carta');

            primeiraCarta = '';
            segundaCarta = '';

        }, 600)
    }
}

const revelarCarta = ({target}) => {
    if(target.parentNode.className.includes('revelar-carta')) {
        return;
    }

    if (primeiraCarta === '') {
        target.parentNode.classList.add('revelar-carta');
        primeiraCarta = target.parentNode;
    } else if (segundaCarta === '') {
        target.parentNode.classList.add('revelar-carta');
        segundaCarta = target.parentNode;
        
        checarCarta();
    }
}

const criarCartas = (personagem) => {
    const card = criarElemento('div', 'card');
    const front = criarElemento('div', 'face front');
    const back = criarElemento('div', 'face back');

    front.style.backgroundImage = `url('../cartas/${personagem}.jpg')`

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revelarCarta);
    card.setAttribute('data-personagem', personagem)

    return card;
}

const carregarJogo = () => {
    const arreyDuplicado = [ ...personagens, ...personagens];

    const arreyEmbaralhado = arreyDuplicado.sort(() => Math.random() -0.5);

    arreyEmbaralhado.forEach((personagem) => {

        const card = criarCartas(personagem);
        grid.appendChild(card);
    });
}

let segundos = 0;
let minutos = 0;

function doisDigitos(digit) {
    if(digit < 10 ) {
      return('0'+digit)
    } else {
      return(digit)
    }
}

const iniciarTempo = () => {
    contador();
    setInterval(contador, 1000);
}

const contador = () => {
    segundos++
    if(segundos == 59) {
       minutos++
       segundos = 0
    }

    timer.innerHTML = doisDigitos(minutos) + ':' + doisDigitos(segundos);
}

window.onload = () => {
    const jogadorNome = localStorage.getItem('player');
    spanPlayer.innerHTML = jogadorNome;

    iniciarTempo();
    carregarJogo();
}