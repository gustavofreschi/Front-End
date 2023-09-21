function animarBarraProgresso() 
{
    //Declarando as variáveis e atribuindo os valores através dos elementos da DOM
    let progress = 0;
    let barra = $(".progress-bar");
    let barraProgresso = $(".progress");

    let intervalo = setInterval(() => {
        if (progress > 100) 
        {
            clearInterval(intervalo);
            barraProgresso.hide();
            document.body.style.backgroundImage = "url('https://wallpaperaccess.com/full/9205550.gif')"
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundAttachment = "fixed";
        } 
        else 
        {
            progress++;
            barra.css("width", progress + "%");
        }
    }, 50);
}