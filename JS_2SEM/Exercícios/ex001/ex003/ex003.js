let paisSelecionado = document.querySelector('#paisSelecionado');
let infoPais = document.querySelector('#infoPais');

const informacoesPaises = {
    brazil: {
        nome: "Brasil",
        capital: "Brasília",
        populacao: "200 milhões",
        idioma: "Português"
    },

    usa: {
        nome: "Estados Unidos",
        capital: "Washington",
        populacao: "331 milhões",
        idioma: "Inglês"
    },

    japan: {
        nome: "Japão",
        capital: "Tokyo",
        populacao: "125,7 milhões",
        idioma: "Japonês"
    },

    french: {
        nome: "França",
        capital: "Paris",
        populacao: "67 milhões",
        idioma: "Francês"
    },

    china: {
        nome: "China",
        capital: "Pequim",
        populacao: "1,412 bilhões",
        idioma: "Chinês"
    }
}



paisSelecionado.addEventListener('change', () => {
    const paisSelecionadoValue = paisSelecionado.value;
    const paisInfo = informacoesPaises[paisSelecionadoValue]

    infoPais.innerHTML = `<div class="alert alert-success fade show">
    <span>Nome: ${paisInfo.nome}, Capital: ${paisInfo.capital}, População: ${paisInfo.populacao}, Idioma: ${paisInfo.idioma}</span>
</div>`;
})