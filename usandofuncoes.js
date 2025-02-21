const funcoes = require('./funcoes');

funcoes.ola();
funcoes.saida("Usando a funcao saida");

// Importar usando desestruturação 

const {ola, saida} = require('./funcoes'); //NAO PRECISA CONTER TODAS AS FUNÇÕES
saida("Importei usando desestruturação");