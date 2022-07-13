let productsCart = [
    {
        id: 1,
        nome: "Uva Crimsom",
        valor: 30.98
    },
    {
        id: 2,
        nome: "Vinho Canção",
        valor: 20.99
    },
    {
        id: 3,
        nome: "Água de Coco",
        valor: 9.99
    },
    {
        id: 4,
        nome: "Mamão",
        valor: 10.99
    },
    {
        id: 5,
        nome: "Água Tônica",
        valor: 18.99
    }
]

let body            = document.body;
let h1              = document.createElement("h1");
h1.innerText        = "Virtual Market";
let main            = document.createElement("main");
let ul              = document.createElement("ul");
let info            = document.createElement("li")
info.innerText      = " -> Clique em Finalizar compra para ver o valor total. <-"


    body.appendChild(main);
    main.appendChild(h1);
    main.appendChild(ul)
    main.appendChild(info)
    
    
let secaoProdutos = document.querySelector("body")

function adicionarProdutos (listaProdutos) { 
    
    for (let i = 0; i < listaProdutos.length; i++){

        let produto = productsCart[i]
        
        let lista = criarLista(produto)
        
        secaoProdutos.appendChild(lista)
    }

}
adicionarProdutos(productsCart)

function criarLista(produto){
    let nome = produto.nome
    let valor = produto.valor

    let tagLi = document.createElement("li")
    let tagNome = document.createElement("p")
    let tagValor = document.createElement("p")
    
    tagNome.innerText = nome
    tagValor.innerText = valor

    tagLi.appendChild(tagNome)
    tagLi.appendChild(tagValor)

    return tagLi
}

let section         = document.createElement("section");
let button          = document.createElement("button");
button.innerText    = "Finalizar compra";

    main.appendChild(section)
    section.classList.add("sectionButton");
    section.appendChild(button);

    function somaTotal(array){
        let soma = 0
        for (i=0; i < array.length; i++){
            let produto = array[i]
            soma = soma+produto.valor
        }
        return soma
    }
  
    
button.addEventListener('click', function(){
    return alert(`O valor total da compra é de R$ ${somaTotal(productsCart)}`)
})

