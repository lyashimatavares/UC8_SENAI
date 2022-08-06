let dataInscricao = new Date("August 02, 2022 12:00:00");
let dataEvento = new Date("August 01, 2022 15:00:00");

if (dataInscricao < dataEvento) {
  console.log("Digite o seu ano de nascimento:"); 
}
if (dataInscricao > dataEvento) {
  console.log("Inscrições encerradas");
}
let anoNascimento = 1995;

if (anoNascimento < 2004) {
    console.log("Digite o seu nome:"); 
  }
  else { 
    console.log("Cadastro não permitido para menores de 18 anos")
}

let participante = 1;
if (lista = 1) {
    console.log("Você está cadastrado como PARTICIPANTE"); 
  }
  else { 
    console.log("Você está cadastrado como PALESTRANTE")
}
let palestrante = 2;
if (lista = 1) {
    console.log("Você está cadastrado como PALESTRANTE"); 
  }
  else { 
    console.log("Você está cadastrado como PARTICIPANTE")
}

let listaEvento = ["Lucas", "Maria", "Arthur", "Thiago", "Flavio", "Priscilla"];
let quantidadeCadastrados = listaEvento.length;

if (quantidadeCadastrados < 100) {
	listaEvento.push("João");
	console.log(listaEvento);
} else {
	console.log("Número máximo de participantes excedido");
}