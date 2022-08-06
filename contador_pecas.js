const listaPecas = ["Peça de teste", "AB", "Peça B"]

console.log("Quantidade de peças");

if (listaPecas.length <= 10) {
    console.log('As peças podem ser cadastradas')
}

console.log(' ')

for (let index = 0; index < listaPecas.length;index++) {
    const pecaAtual = listaPecas[index];
    if (pecaAtual.length < 3 ) {
        console.log(pecaAtual + ": A peça possui nome inferior a 3 caracteres, portanto não pode ser cadastrada")
    
    } else {
        console.log(pecaAtual+ 'Peça cadastrada.')
    }
    console.log('Peso da peça [g]')

    const pesoPeca = 50;

    if (pesoPeca >= 100) {
        console.log('Peso suficiente')
        
    } else {
        console.log('Peso insuficiente')
    }

}