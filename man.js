
//array e dicionário//


//ARRAY

/*
var lista = ["maçã", "pera", "laranja"];
console.log(lista[0]);*/

//vamos supor que quero colocar um item a mais nessa lista usa o push

/*var lista = ["maçã", "pera", "laranja"];
lista.push("uva");
console.log(lista);
*/

//vamos supor que quero tirar um elemento dessa lista usa o pop

/*var lista = ["maçã", "pera", "laranja"];
lista.pop();
console.log(lista);
*/

//ver o tamanho da minha lista em quantidade de item

/*var lista = ["maçã", "pera", "laranja"];
console.log(lista.length);*/ //temos também o reverse que conseguimos trazer os elementos ao contrário da lista

//podemos tamém trazar os elementos array para string com o .toString

/*var lista = ["maçã", "pera", "laranja"];
console.log(lista.toString());*/

//podemos também escolher com que separar as strings com o join

/*var lista = ["maçã", "pera", "laranja"];
console.log(lista.join("/"));*/

//DICIONÁRIO

/*nesse caso vai aparescer no console a cor da fruta */

/*var fruta = {nome:"maçã", cor:"vermelha"};
console.log(fruta.cor);*/

//lista de dicionário

/*nesse caso ela vai me dizar a posição 1 e o nome dela*/

/*var frutas = [ {nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"} ]
console.log(frutas[1].nome);*/

//CONDICIONAIS, LAÇOS DE REPETIÇÃO  E DATE

//CONDIÇÃO

 /*var idade = 20;
 if (idade > 19){
    alert("maior de idade");
 }

 else {
    alert("menor de idade")
 };*/

 //vamos supor que você quer pergunta para o usuário o sua idade é só usar o prompt

/* var idade = prompt("Qual a sua idade?")
 if (idade > 19){
    alert("maior de idade");
 }

 else {
    alert("menor de idade")
 };*/

//LAÇÕS DE REPETIÇÃO com WHILE

/* "nesse caso o sistema esta dizendo que enquanto count for menor ou igual a 5 faça a repetição de count + 1 ou count ++"

var count = 0;
while (count <= 5) {
    console.log(count); count = count +1; 
};*/

//LAÇO DE REPETIÇÃO COM FOR

/* "nesse caso está dizendo que existe uma cariável count, para count = 0, enquanto count for menor ou igual a 5 faça count++, ou seja some ele mais 1"

var count;
for(count = 0; count <= 5; count++){
    console.log(count);
};
*/

//DATE

/*Para pega a data atual faça*/

//var d = new Date();
//alert(d)


/*alert(d.getMonth()+1) "para trazer só o mês certo"*/
/*alert(d.getMinutes()) "para trazer só  o minuto certo"*/
/*alert(d.getDay()) "para trazer só o dia certo"*/
/*alert(d.getHours()+1) "para trazer só a hora certa"*/


//DESENVOLVA PÁGINAS WEB COM JAVASCRIPT

//FUNÇÃO

/*nesse caso eu estou com uma funçao de soma onde somo n1 e n2 retornando n1 + n2, no alert eu dei o valor para n1 e n2.

function soma(n1,n2){
    return n1 + n2;
};

alert(soma(5,10)) */

//função validar a idade

/*"Nesse caso estou querendo validar uma idade pela function onde a idade o usuário que vai dizer, nome da funçao validaIdade recebe (idade), criamos uma variável validar seca, se a idade for maior ou igual a 18 validar recebe true se não recebe false, retornando a variável, imprimo na tela a função validaIdade com seu valor idade verdadeiro ou falso"

var idade = prompt("qual a sua idade");

function validaIdade(idade){
    var validar;
    if (idade >= 18) {
        validar = true
    }
    else {
        validar = false
    } 
    return validar;
}

console.log(validaIdade(idade)) */

// MANIPULANDO ELEMENTOS DA PÁGINA HTML

//EXEMPLO 01

/* "Levamos essa função para o html e puxamos ela pra ser executada ao clicar no botão aparecer o alert"

function botao () {
    alert ("obrigado por clicar")
}
*/

//EXEMPLO 02

/* nesse caso eu estou pedindo para assim que eu clicar no meu botão a função ir lá no meu item com o id = "agradecimento" e inserir nele o texto "obigado por clicar". para isso eu uso o document.getElementById para fazer eu ir lá no html e o .innerHTML para incluir o texto.

function botao () {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
} */

//EXEMPLO 03

/* nesse caso estou seguindo os passos anterior mais com uma alteração de quando eu clicar no h1 da página ele vai mim jogar pra outro site em outra aba.


function botao () {
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar";
}

function redirecionar(){
    window.open("https://fabiosilvadev.netlify.app/");
} */

//EXEMPLO 04

/*Esse caso faz com que possamos trocar de o nome ao passar o muse por cima, e ao tirar o mouse voltar para o que estava antes.

function trocar () {
    document.getElementById("mousemove").innerHTML="Origado por passar o mouse aqui"
}

function voltar () {
    document.getElementById("mousemove").innerHTML="passe o mouse aqui"
} */

//EXEMPLO 05

/* "nesse caso queremos aplicar a trocar em varios elementos então aplicamos a tag this no html e aqui incluimos na função o elemento"

function trocar (elemento) {
    elemento.innerHTML="Origado por passar o mouse aqui"
}

function voltar (elemento) {
    elemento.innerHTML="passe o mouse aqui"
} */

//EXEMPLO 6

/* Esse exemplo é usado no body, colocamos quando queremos dar um alerta com alguma mensagem

function load () {
    alert("Seja bem vindo a página")
} */

// EXEMPLO 07
/* "esse faz com quer conseguimos pegar o valor do elemento"

function funcaoChange(elemento) {
    console.log(elemento.value)
} */


let valor1 = parseInt(gets());
let valor2 = parseInt(gets());
let total = valor1 * valor2; // Altere o valor da variável com o cálculo esperado 
console.log("PROD = " + total);

