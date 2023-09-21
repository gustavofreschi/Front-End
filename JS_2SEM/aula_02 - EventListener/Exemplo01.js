//Selecionando botão pelo ID
const btn = document.querySelector('#botao');
const contadorElemento = document.querySelector('#resultado');
const btn2 = document.querySelector('#botao2');
const btn3 = document.querySelector('#botao3');

//Inicializando contador
let contador = 0;



//Adicionando ouvinte de evento do click
btn.addEventListener('click', () => {
    contador++;
    contadorElemento.innerHTML = `${contador}`
})

btn2.addEventListener('click', () => {
    contador--;
    contadorElemento.innerHTML = `${contador}`
    if (contador < 0) 
    {
        alert("Número não pode ser menor que 0!");
        contador = 0;
        contadorElemento.innerHTML = `${contador}`

    }
})

btn3.addEventListener('click', () => {
    contador = 0;
    contadorElemento.innerHTML = `${contador}`
})