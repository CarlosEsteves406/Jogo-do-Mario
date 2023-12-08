const mario = document.querySelector('.mario');
const cano = document.querySelector('.cano');
var contador = document.querySelector('#pontuacao');

mario.classList.remove('pulou');

const pulou = () => {
    mario.classList.add('pulou');

    setTimeout(() => {
        mario.classList.remove('pulou')
    }, 800);
}

const loop = setInterval(() => {

    const posicaoCano = cano.offsetLeft;
    const posicaoMario = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (posicaoCano < 150 && posicaoCano > 0 && posicaoMario < 180) {

        cano.style.animation = 'none';
        cano.style.left = `${posicaoCano}`;

        mario.style.animation = 'none';
        mario.style.bottom = `${posicaoMario}`;

        mario.src = `/imgs/game-over.png`;
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        setTimeout(() => {
            window.location.href = "gameOver.html";
        }, 1000);

    }
}, 10);

let quantia = 0;

setInterval(() => {
    quantia += 1;
    placar(quantia);
}, 2000);

function placar(miau) {
    contador.innerHTML = miau;
}


document.addEventListener('keydown', pulou);