function isTouching(a, b) {
    const aRect = a.getBoundingClientRect();
    const bRect = b.getBoundingClientRect();

    return !(
        aRect.top + aRect.height < bRect.top ||
        aRect.top > bRect.top + bRect.height ||
        aRect.left + aRect.width < bRect.left ||
        aRect.left > bRect.left + bRect.width
    );
}

const avarta = document.querySelector('#player');
const coin = document.querySelector('#coin');

window.addEventListener('keyup', function(e) {
    if (e.key === 'ArrowDown' || e.key === 'Down') {
        moveVertical(avarta, 200);
    } else if (e.key === 'ArrowUp' || e.key === 'Up') {
        moveVertical(avarta, -200);
    } else if (e.key === 'ArrowRight' || e.key === 'Right') {
    	moveHorizol(avarta, 100);
        avarta.style.transform = `scale(1,1)`;
    } else if (e.key === 'ArrowLeft' || e.key === 'Left') {
        moveHorizol(avarta, -100);
        avarta.style.transform = `scale(-1,1)`;
    }

    if (isTouching(avarta, coin)) {
        moveCoin();
    }
})

const moveVertical = (element, amount) => {
    const currTop = extractPos(element.style.top);
    element.style.top = `${currTop + amount}px`;
}

const moveHorizol = (element, amount) => {
    const currLeft = extractPos(element.style.left);
    element.style.left = `${currLeft + amount}px`;
}

const extractPos = (pos) => {
    if (!pos) return 100;
    return parseInt(pos.slice(0, -2))
};

const moveCoin = () => {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    coin.style.top = `${y}px`;
    coin.style.left = `${x}px`;
}