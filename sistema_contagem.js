let numeroAlunos = 10;

for (let contador = 0; contador < numeroAlunos; contador++) {

    console.log(contador)

    if (contador == 0) {
        console.log ("Classificado o zero")
    }
        if (contador % 2 == 0) {
            console.log("Número par")
        } else {
            console.log("Número ímpar")
        }
}