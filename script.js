let calcular = document.getElementById('calcular');

calcular.addEventListener('click', calcularIMC);

function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let resultado = document.getElementById("resultado");
    let nome = document.getElementById('nome').value.trim();

    if (nome === "" || isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerHTML = "Por favor, insira valores válidos!";
        resultado.style.color = "red";
        return;
    }

    let imc = peso / (altura * altura);
    let classificacao = "";

    if (imc < 18.5) {
        classificacao = "abaixo do peso";
    } else if (imc < 24.9) {
        classificacao = "com peso normal";
    } else if (imc < 29.9) {
        classificacao = "com sobrepeso";
    } else if (imc < 34.9) {
        classificacao = "com obesidade Grau I";
    } else if (imc < 39.9) {
        classificacao = "com obesidade Grau II";
    } else {
        classificacao = "com obesidade Grau III (mórbida)";
    }

    resultado.innerHTML = `${nome}, seu IMC é ${imc.toFixed(2)} e você está ${classificacao}.`;
    resultado.style.color = "#333";
}