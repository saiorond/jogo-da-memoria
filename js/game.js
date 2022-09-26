const grid = document.querySelector('.grid');

const cards = [
    'a fror dite',
    'E A TIA2',
    'hefestas',
    'Hera cles4',
    'mês dela',
    'Palas atenta',
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

const criarCartas = () => {
    const card = criarElemento('div', 'card');
    const front = criarElemento('div', 'face front');
    const back = criarElemento('div', 'face back');

    card.appendChild(front);
    card.appendChild(back);

    return card;
}

criarCartas();