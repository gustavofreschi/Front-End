//dados para o gráfico

let data = {
    //rótulos do gráfico
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto'],

    //propriedades do gráfico
    datasets: [{
        label: 'Vendas Mensais',
        backgroundColor: 'rgba(76, 193, 192, 0.6)',
        borderColor: 'rgba(0, 192, 150, 1)',
        borderWidth: 1,
        data: [12, 19, 13, 22, 2, 5, 9, 12]

    },
    {
        label: 'Vendas 2020',
        backgroundColor: 'green',
        borderWidth: 1,
        data: [8, 5, 5, 10, 7, 4, 5, 4]

    },
    {
        label: 'Vendas 2021',
        backgroundColor: 'yellow',
        borderWidth: 1,
        data: [6, 10, 5, 20, 6, 9, 3, 11]

    },
    {
        label: 'Vendas 2022',
        backgroundColor: 'black',
        borderWidth: 1,
        data: [3, 20, 10, 30, 12, 5, 7, 12]

    },
    {
        label: 'Vendas 2023',
        backgroundColor: 'red',
        borderWidth: 1,
        data: [10, 25, 5, 25, 10, 4, 9, 21]

    }]


}

//Configurações do gráfico
var options = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
}

//Criar o gráfico de barras
let ctx = document.querySelector('#grafico').getContext('2d')
let barChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
})