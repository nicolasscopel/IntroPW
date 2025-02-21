const livros1 = ["CSS3", "JavaScript", "PHP"];
const livros2 = ["React", "HTML 5"];

//NAO FUNCIONA
//const livros = livros1 + livros2;

const livros = [...livros1, ...livros2];

//console.log(livros);

const precos = [90,50,95,30,98];

//NAO FUNCIONA
//let precoMaior = Math.max(precos);
let precoMaior = Math.max(...precos);

//console.log(precoMaior);

//OBJETO JSON
let objeto = { "id" : 8, "nome" : "Nicolas" } ; 

console.log(objeto);

objeto.nome = "Nicolas Scopel";

console.log(objeto);

let objetoAlterado = {...objeto, "nome" : "Nicolas Pelizari Scopel"};
console.log(objetoAlterado);
