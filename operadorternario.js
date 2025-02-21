let resultado = "";

let preco = 50;

if(preco < 40){
    resultado = "Valor Barato";
}else { 
    resultado = "Valor Caro";
}

console.log(resultado);

resultado = preco < 40 ? "Livro Barato" : "Livro Caro";

console.log(resultado);

console.log(preco < 40 ? "Livro Barato" : "Livro Caro");