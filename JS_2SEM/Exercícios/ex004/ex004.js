canvas = document.querySelector('canvas');

//definir o tamanho de canvas
canvas.width = 800;
canvas.height = 600;

c = canvas.getContext('2d');

let posicoes = document.querySelector('#posicoes');



function Desenhar() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.fillStyle = 'black';
    c.fillRect(position.x, position.y, 50, 50);
}

let position = {
    x: 400,
    y: 300
}

posicoes.innerHTML = `X: ${position.x} | Y: ${position.y}`

document.addEventListener('keydown', (event) => {

switch (event.key) {
    case 'a':
    case 'A':
    case 'ArrowLeft':
        position.x -= 10;
        break;
    case 's':
    case 'S':
    case 'ArrowDown':
        position.y += 10;
        break;
    case 'w':
    case 'W':
    case 'ArrowUp':
        position.y -= 10;
        break;
    case 'd':
    case 'D':
    case 'ArrowRight':
        position.x += 10;
        break;
}

c.fillRect(position.x, position.y, 50, 50);

posicoes.innerHTML = `X: ${position.x} | Y: ${position.y}`

if (position.x < 0 || position.x > 750 || position.y < 0 || position.y > 550) {
    alert('Você passou dos limites!');
    position.x = 400;
    position.y = 300;   
}

Desenhar();
})

Desenhar();