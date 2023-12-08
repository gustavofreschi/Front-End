const colunas = document.querySelectorAll(".column");

//Variável para armazenar o item atual arrastado
let ItemArrastado = null;

//Adiciona um ouvinte ao evento "dragstart" a cada elemento com a classe "column"
colunas.forEach(item => {
    item.addEventListener("dragstart", (e) => {
        //Define o item sendo arrastado
        ItemArrastado = e.target;

        //Adiciona a classe "dragging" ao item para destacá-lo visualmente
        ItemArrastado.classList.add("dragging");

    });


    //Adiciona um ouvinte ao evento "dragend" para limpar o estado do arrasto
    item.addEventListener('dragend', () => {
        ItemArrastado.classList.remove("dragging");

        ItemArrastado = null;
    });

});

//Adiciona um ouvinte ao evento "dragover" a cada elemento com a classe "column"
colunas.forEach((item) => {
    item.addEventListener("dragover", (e) => {
        e.preventDefault(); //Previne o comportamento padrão de dragover
        //Verifica se há um item sendo arrastado (! significa false)
        if (!ItemArrastado) {
            return
        }

        const aplicarDepois = getNewPosition(item, e.clientY);

        //Insere o item arrastado após o de referência ou início da coluna
        if (aplicarDepois) {
            aplicarDepois.insertAdjacentElement("afterend", ItemArrastado);
        } else {
            item.prepend(ItemArrastado);
        }
    });
});

//Função para calcular a nova posição do item na coluna
function getNewPosition(column, posY) 
{
   const cards = column.querySelectorAll(".item:not(.dragging)");
   let result;

   for (let refer_card of cards) {
    const box = refer_card.getBoundingClientRect();
    const boxCenterY = box.top + box.height / 2;

    //verifica se a posição do mouse está acima do centro do item de referência
    if (posY >= boxCenterY) 
    {
        result = refer_card;
    }
    return result;
   }
}