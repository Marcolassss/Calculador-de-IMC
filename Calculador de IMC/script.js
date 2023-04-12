
const calcular = document.getElementById('calcular');


function imc(){
//  VARIAVEIS 
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

//SE NOME,ALTURA E PESO FOR DIFERENTE DE VAZIO    
    if (nome !== '' && altura !== '' && peso !==''){
        
        const valorIMC= (peso / (altura * altura)).toFixed(1);

// VARIAVEIS DE CLASSIFICAÇÃO
let classificacao = '';
    if (valorIMC <=18.5){
        classificacao = 'abaixo do peso.';
    } else if (valorIMC <25){
        classificacao = 'com o peso ideal. Parabens!';
    } else if (valorIMC <30){
        classificacao = 'levemente acima do peso';
    }else if (valorIMC <35){
        classificacao= 'com obesidade grau I.';
    } else if (valorIMC <40){
        classificacao = ' com obesidade grau II.';
    } else{
        classificacao= 'com obesidade grau III.';
    }

//TEMPLATE STRING 
        resultado.textContent = `${nome}, seu IMC é ${valorIMC} e você está ${classificacao}`;

//ENTAO ME RETORNE A MENSAGEM PARA PREENCHER OS CAMPOS
    } else{
        resultado.textContent = 'Preencha todos os campos!!!';
    }


}
//EVENTO DE
calcular.addEventListener('click', imc);