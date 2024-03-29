
/*
    Questão 01:
    Implemente um programa em JavaScript que mostre 5 imagens randomicamente 
    (a troca de imagens pode ser implementada por meio de um botão)
*/
function alterarImg(){
    let imagens = ["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg","img/05.jpg"];
    let i = Math.floor(Math.random()* 5); 
    console.log(i);
    let imagenExibida = imagens[i];

    let imgDOM = document.getElementById("imagensGigantes");

    imgDOM.src = imagenExibida;
}

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

/*  
    Questão 02:
    Desenvolva um formulário Web com dois campos (e-mail, senha) e um botão.
    Quando o usuário colocar o foco no campo e-mail a mensagem “Campo para você digitar um e-mail” deve aparacer na tela. 
    Da mesma forma, quando o usuário colocar o foco no campo senha a mensagem “Campo para você digitar uma senha” deve ser apresentado para o usuário. 
    Finalmente, quando o usuário pressionar o botão, 
    os valores de e-mail e senha devem ser mostrados na tela por meio de um alert de Javascript.
*/
function mensagemInput(id){

    switch (id) {
        case "email": mensagem =  "Campo para você digitar um e-mail"
        break
        case "senha": mensagem = "Campo para você digitar uma senha"
        break
    }

    document.getElementById("mensagem").innerHTML = mensagem;
    document.getElementById("mensagem").style.backgroundColor='#ff0121'
}

function exeibirAlerta(){
    let formularioDom =  document.getElementById("formulario");
    let mensagem = '';

    if (formularioDom.children[1].value === ''){
        alert("Preencha o campo e-mail");
    } else  {
        mensagem += "\nE-mail: " + formularioDom.children[1].value;
    } 

    if (formularioDom.children[2].value === ''){
        alert("Preencha o campo senha");
    } else {
        mensagem += "\nSenha: " + formularioDom.children[2].value;
    }

    if (mensagem){
        alert(mensagem);

    }
}

/*  
    Questão 03:
    Crie uma lista em HTML com quarenta nomes de pessoas, porém, apenas os dez primeiros nomes devem ser apresentados para os usuários.
    Entretanto, o sistema deve permitir que sejam visualizados e consequentemente escondidos mais nomes da lista por meio de dois botões.
    Uma vez pressionado, o primeiro botão deve sempre apresentar mais dez usuários até o limite máximo (40).
    Já o segundo botão deve esconder dez usuários até o limite mínimo (10).
*/
var listaNomes = ["Alice","Miguel","Sophia","Arthur","Helena","Bernardo","Valentina","Heitor","Laura","Davi","Isabella","Lorenzo","Manuela","Théo","Júlia","Pedro","Heloísa","Gabriel","Luiza","Enzo","Maria Luiza","Matheus","Lorena","Lucas","Lívia","Benjamin","Giovanna","Nicolas","Maria Eduarda","Guilherme","Beatriz","Rafael","Maria Clara","Joaquim","Cecília","Samuel","Eloá","Enzo Gabriel","Lara","João Miguel"]

var dezNomes = [];
var l = 0;

//função que gera 10 nomes no carregamento da pagina.
function onload(){

    //coloca no array dezNomes grupos de 10 em 10
    for(let x = 0; x < listaNomes.length; x+=10){
        dezNomes.push(listaNomes.slice(x, x+10));
    }
    
    let olDom = document.getElementById("listaNomes");
   
    for (i = 0; i < 10; i++){
        var liDom = document.createElement("li");
        liDom.innerHTML = dezNomes[l][i];
        olDom.appendChild(liDom);
    }
    
    l += 1
}

//função que gera de 10 em 10 nomes
function  exibirMais(){
    let olDom = document.getElementById("listaNomes");

    if (olDom.children.length === 40){
        alert("Maximo de 40 nomes em exibição atingido.")
    } else {
        for (i = 0; i < 10; i++){
            let liDom = document.createElement("li");
            liDom.innerHTML = dezNomes[l][i];
            olDom.appendChild(liDom);
        }
        
        l += 1;

    }
}

//Função que ocu de 10 em 10 nomes
function exibirMenos(){
    let olDom = document.getElementById("listaNomes");
    
    if (olDom.children.length === 10 ){
        alert("Exibição minima de 10 nomes atingida.")
    } else {
        for (i = 0; i < 10; i++){
            olDom.removeChild(olDom.lastChild);
        }

        l -= 1;
        
    }
}