function calc(){
    //Declarando variavel
let num1 = parseInt(document.getElementById('num1').value) ;
let num2 = parseInt(document.getElementById('num2').value) ;

document.getElementById('resultado').innerHTML = num1 * num2;

}
function Inserir(){


let numero = document.getElementById("posicao").value -1;
let novo = document.getElementById("novo").value;
document.getElementsByClassName("time")[numero].innerHTML = novo


}