function calcimc() {
    var imc, altura, peso;
    peso = parseFloat(prompt("Insira o seu peso: "));
    altura = parseFloat(prompt("Insira a sua altura: "));
    imc = peso / altura * altura;
    if (imc > 17) {
        document.write("Muito abaixo do peso");
    } else if (imc >= 17 && imc < 18.49) {
        document.write("Abaixo do peso");
    } else if (imc >= 18.5 && imc < 24.99) {
        document.write("Peso Normal");
    } else if (imc >= 25 && imc < 29.99) {
        document.write("Acima do peso");
    } else if (imc >= 30 && imc < 34.99) {
        document.write("Obesidade I");
    } else if (imc >= 35 && imc < 39.99) {
        document.write("Obesidade II (severa)");
    } else if (imc > 40) {
        document.write("Obesidade III (mórbida)");
    }
} calcimc();