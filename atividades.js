// CRIAR UM ARQUIVO SEPARADO COM TODAS AS FUNÇÕES 
const funcoes = require('./funcoes');
/* FUNÇÃO 1 
Função que recebe nome (nome e caminho) de um arquivo e retorna a leitura dos dados
existentes nele.

EXEMPLO: Recebe “dados.txt” e o retorno do método deve ser um conteúdo: {
"nome": "CSS3", "ano": 2020 }, { "nome": "HTML5", "ano": 2018 }, {
"nome": "JavaScript", "ano": 2015 }
*/

funcoes.funcao1();






/* FUNÇÃO 2
Função que recebe um objeto JSON e o nome (nome e caminho) de um arquivo e
adiciona o objeto recebido na coleção de objetos JSON existentes no arquivo em
questão.

EXEMPLO: Adiciona o elemento { "nome": "CSS3", "ano": 2020 } na lista de
objetos do arquivo. 
*/

/*FUNÇÃO 3
Função que recebe um nome de um atributo e o nome (nome e caminho) de um arquivo
e retorna um objeto cujo nome exista na coleção de objetos.

EXEMPLO: Recebe o valor "CSS3" e retorna { "nome": "CSS3", "ano": 2020 }
*/

/*FUNÇÃO 4
Função que recebe um nome de um atributo e o nome (nome e caminho) de um arquivo
e remove o objeto cujo nome exista na coleção de objetos.

EXEMPLO: Recebe o valor "CSS3" e remove o objeto com esse valor.
*/