const ListaDePeças = ["Peca de teste", "AB", "peca B"]

console.log("quantidade pecas");

if (ListaDePeças.length <= 10) {
    console.log('As peças podem ser cadastradas')
}

console.log('---------------------')

for (let index = 0; index < ListaDePeças.length;index++) {
    const pecaAtual = ListaDePeças[index];
    if (pecaAtual.length < 3 ) {
        console.log(pecaAtual + ": a peca possui nome inferior a 3 caracteres e não pode ser cadastrada")
    
    } else {
        console.log(pecaAtual+ 'a peca pode ser cadastrada.')
    }
    console.log('peso da peca')

    const pesoDaPecaEmGramas = 50;

    if (pesoDaPecaEmGramas >= 100) {
        console.log('peso suficiente')
        
    } else {
        console.log('valor insuficiente')
    }

}