const visor = document.querySelector('#visor');

//Adicionando um ouvinte para o evento keydown
document.addEventListener('keydown', (event) => {
    /*if (event.key == 'a' || event.key == 'A') 
    {
        visor.innerHTML = "Tecla A pressionada."
        visor.style.color = 'black'
        document.body.style.backgroundColor = 'red'
    } else if (event.key == 'd' || event.key == 'D') 
    {
        visor.innerHTML = "Tecla D pressionada."
        visor.style.color = 'white'
        document.body.style.backgroundColor = 'blue'
    } */

     visor.textContent = `Tecla pressionada: ${event.key}`
    
})

