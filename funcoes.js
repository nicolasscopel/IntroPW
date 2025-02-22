const ola = () => {
    console.log("usei a funcao ola");
}

const saida = (texto) => {
    console.log(texto);
}

const funcao1 = () => {

    const { rejects } = require('assert');
    const fs = require('fs');

    function callback(err, contents) {     //NAO VAI MOSTRAR ENTRE O NUMERO POIS É ASSÍNCRONA
        console.log(err, String(contents))
    }


    // fs.readFile('./meuarquivo.txt', (err,contents) => {
    //     console.log(err,String(contents));
    //});

    const readFile = file => new Promise((resolve, reject) => {
        fs.readFile(file, (err, contents) => {
            if (err) {
                reject(err);
            } else {
                resolve(contents);
            }
        })
    })

    readFile('./meuarquivo.txt')
        .then(contents => {
            console.log(String(contents))
        })
        .catch(err => console.log(err));

        /*  
            const leitura = async(arquivo) => {
            const contents = await readFile(arquivo);
            console.log(String(contents));
        }
        
        leitura('./meuarquivo.txt');*/
       


} 

const funcao2 = () => {

    const fs = require('fs');

    let dados = fs.readFileSync('meuarquivo.txt').toString('UTF8');
    
    //console.log(dados);

    let dadosJSON = JSON.parse(dados);

    //console.log(dadosJSON[1]);

    const adicionar = { "nome" : "C", "ano" : 2005 };

    let listaNova = [...dadosJSON, adicionar];

    fs.writeFileSync('arquivoadicionar.txt', JSON.stringify(listaNova));
   
    console.log("Nome:" + adicionar.nome + " Ano:" + adicionar.ano + " Adicionado na lista!");

}

const funcao3 = () => {

    const fs = require('fs');

    const dados = fs.readFileSync('meuarquivo.txt').toString('UTF8');

    let dadosJ = JSON.parse(dados);
   

    let objeto = dadosJ.find((dado) => dado.nome === "JavaScript");

    if(objeto != null){
        console.log(objeto);
    } else {
        console.log("Não existe livro com esse nome!")
    }
   


}

const funcao4 = () => {

    const fs = require('fs');

    const remover = "React";

    const dados = fs.readFileSync('meuarquivo.txt').toString('UTF8');

    let dadosJSON = JSON.parse(dados);

    let dadosFiltrados = dadosJSON.filter((dado) => dado.nome != remover);

    fs.writeFileSync('arquivofiltrado.txt', JSON.stringify(dadosFiltrados));

    console.log("Livro com nome " + remover + " retirado da lista!");

}

module.exports = { funcao1, funcao2, funcao3, funcao4 };