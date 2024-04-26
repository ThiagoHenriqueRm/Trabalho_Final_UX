function calcularIMC() {
    var peso = parseFloat(document.getElementById("input_IMC_peso").value);
    var altura = parseFloat(document.getElementById("input_IMC_altura").value);

    if (isNaN(peso) || isNaN(altura)) {
        document.getElementById("resultado_IMC").innerText = "Por favor, insira valores válidos.";
        return;
    }

    var imc = peso / (altura * altura);
    var resultado = "";

    if (imc < 18.5) {
        resultado = "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultado = "Peso normal";
    } else if (imc >= 24.9 && imc < 29.9) {
        resultado = "Sobrepeso";
    } else if (imc >= 29.9 && imc < 34.9) {
        resultado = "Obesidade Grau I";
    } else if (imc >= 34.9 && imc < 39.9) {
        resultado = "Obesidade Grau II";
    } else {
        resultado = "Obesidade Grau III";
    }

    document.getElementById("resultado_IMC").innerText = "Seu IMC é " + imc.toFixed(2) + ", o que indica: " + resultado;
}