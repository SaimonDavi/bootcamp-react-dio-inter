function somaNumeros(arr) {
    return arr.reduce(function(prev, current){
        // console.log({ prev });
        // console.log({ current });
        return prev + current;
    }, 0);
}

const nums = [1, 2, 3];

console.log(somaNumeros(nums))

///////////////////////////////////////////////////

const lista = [
    {
        nome: 'item 1',
        preco: 20
    },
    {
        nome: 'item 2',
        preco: 20
    },
    {
        nome: 'item 3',
        preco: 20
    },  
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current){
        return prev - current.preco;
    }, saldoDisponivel)
}

console.log(calculaSaldo(saldoDisponivel,lista))