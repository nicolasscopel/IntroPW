const fs = require('fs');

let arquivo = 'meuarquivo.txt';

const livros = [{"nome" : "CSS3", "ano" : 2024}, {"nome" : "HTML 5", "ano" : 2018}, 
    {"nome" : "React", "ano" : 2023}, {"nome" : "JavaScript", "ano" : 2025}];


//escrever arquivo no disco

fs.writeFileSync(arquivo, JSON.stringify(livros));

// ler arquivo do disco

let dadosArquivo = fs.readFileSync(arquivo).toString('UTF8');

console.log(dadosArquivo);

//precisa fazer o parse para usar como objeto JS
let dadosJSON = JSON.parse(dadosArquivo);

console.log(dadosJSON[0]);