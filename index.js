let altura;
let peso;
let imc = 0;

document.getElementById("btenviar").onclick = function(){

    altura = document.getElementById("alturacm").value;
    peso = document.getElementById("pesokg").value;

    console.log(altura);
    console.log(peso);

    altura = altura / 100;
    altura2 = Math.pow(altura,2);

    imc = peso / altura2;

    console.log(altura);
    console.log(imc.toFixed(2)); 

    if(imc < 18.5){
        document.getElementById("textoresultado").innerHTML = "ABAIXO DO PESO NORMAL";
    }

    else if(imc >= 18.5 && imc < 25){
        document.getElementById("textoresultado").innerHTML = "PESO NORMAL";
    }

    else if(imc >= 25 && imc < 30){
        document.getElementById("textoresultado").innerHTML = "EXCESSO DE PESO";
    }

    else if(imc >= 30 && imc < 35){
        document.getElementById("textoresultado").innerHTML = "OBESIDADE CLASSE I";
    }

    else if(imc >= 35 && imc < 40){
        document.getElementById("textoresultado").innerHTML = "OBESIDADE CLASSE II";
    }

    else if(imc > 40){
        document.getElementById("textoresultado").innerHTML = "OBESIDADE CLASSE III";
    }
}
