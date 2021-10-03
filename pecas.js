var listaDePecas = ["Filtro de ar", "Motor", "Armotecedor"]

if (listaDePecas.length < 10) {
   // É possível cadastrar peças
   console.log("É possivel cadastrar mais peças")
} else {
   console.log("Não tem mais espaço nessas lista, impossível efeturar o cadastro!")
}

let peso = 200;

if (peso < 100) {
   console.log("A pesa deve passar no mínimo 100g")
} else {
   console.log("A peça possui peso adequado")
}

let nomePeca = "caixa de cambio"

if (nomePeca.length > 3) {
   console.log("Nome da peça está adequado para o cadastro!")
} else if(nomePeca.length == 0){
   console.log("O nome da peça não pode ser vazio")
}else {
   console.log("O nome deve ter mais de 3 caracteres, digite um nome valido.")
} switch(nomePeca){
   case 0:
   console.log("O nome da peça não pode ser vazio")
   break
   
   case 1:
   case 2:
   case 3:
      console.log("O nome deve ter mais de # caracteres, digite um nome adequado")
      break;

   case 4:
      console.log("O nome possui 4 chars") 
      break;
      
   default:
      console.log("Nome da peça está adequado para o cadastro!")
      break;

}