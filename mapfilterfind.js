const livros = [{"nome" : "CSS3", "ano" : 2024}, {"nome" : "HTML 5", "ano" : 2018}, 
            {"nome" : "React", "ano" : 2023}, {"nome" : "JavaScript", "ano" : 2025}]

//livros.map((livros) =>{
//    console.log("Nome: " + livros.nome + " Ano: " + livros.ano);
//})


livros.map((livros, index) =>{
    console.log("Nome: " + livros.nome + " Ano: " + livros.ano + " Indice: " + index);
})

// filter 

let livrosFiltrados = livros.filter((livro) => livro.ano > 2023);

//console.log(livrosFiltrados);


// find
let objeto = livros.find((livro) => livro.nome === "React");
console.log(objeto);