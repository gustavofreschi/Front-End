let corSelecionada = document.querySelector('#corSelecionada');
let exibirCor = document.querySelector('#exibirSelecao');

//Função para atualizar a cor exibida
corSelecionada.addEventListener('change', () => {
     //Atribui o valor da seleção da variável
     const corSelecionadaValue = corSelecionada.value;

     exibirCor.textContent = `Cor selecionada: ${corSelecionadaValue}`

     //Usar cor no estilo da div
     exibirCor.style.color = corSelecionadaValue; 
})