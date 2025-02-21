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



}

const funcao2 = () => {

}

const funcao3 = () => {

}

const funcao4 = () => {

}

module.exports = { funcao1, funcao2, funcao3, funcao4 };