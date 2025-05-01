function calcularIMC() {
    const pesoInput = document.getElementById("peso");
    const alturaInput = document.getElementById("altura");
    const resultado = document.getElementById("resultado");

    const peso = parseFloat(pesoInput.value.replace(",", "."));
    const altura = parseFloat(alturaInput.value.replace(",", "."));

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultado.innerHTML = "Por favor, insira valores válidos!";
        resultado.style.color = "red";
        return;
    }

    const imc = peso / (altura * altura);
    const classificacao = classificarIMC(imc);

    resultado.innerHTML = `IMC: ${imc.toFixed(2)} - ${classificacao}`;
    resultado.style.color = "black";
}

function classificarIMC(imc) {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc < 24.9) return "Peso normal";
    if (imc < 29.9) return "Sobrepeso";
    if (imc < 34.9) return "Obesidade Grau I";
    if (imc < 39.9) return "Obesidade Grau II";
    return "Obesidade Grau III (Mórbida)";
}