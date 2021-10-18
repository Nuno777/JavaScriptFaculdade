var peso, altura, imc = 0;
do {
    peso = parseInt(prompt("Insira o seu peso: "));
    if (peso <= 0 || peso >= 300) {
        alert("Peso errado");
    }
} while (peso <= 0 || peso >= 300);
do {
    altura = parseFloat(prompt("Insira a sua altura: "));
    if (altura <= 0 || altura >= 3) {
        alert("Altura errado");
    }
} while (altura <= 0 || altura >= 3);
imc = peso / (altura * altura);
if (imc < 18.5) {
    document.write("Magro");
} else if (imc >= 18.5 && imc < 25) {
    document.write("Saudável");
} else if (imc >= 25 && imc < 30) {
    document.write("Excesso de peso");
}
else {
    document.write("Obeso");
}