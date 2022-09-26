const grid = document.querySelector('.grid');

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

const criarCartas = (personagem) => {
    const card = criarElemento('div', 'card');
    const front = criarElemento('div', 'face front');
    const back = criarElemento('div', 'face back');

    front.style.backgroundImage = `url('../cartas/${personagem}.jpg')`

    card.appendChild(front);
    card.appendChild(back);

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

carregarJogo()