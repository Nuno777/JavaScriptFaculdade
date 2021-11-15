function lerNumero() {
    n1 = parseInt(prompt("Insira o primeiro numero:"));
    n2 = parseInt(prompt("Insira o segundo numero:"));
    return n1, n2;
}

function multiplos() {
    if (n1 % n2 == 0 || n2 % n1 == 0) {
        document.write("Verdadeiro");
    } else {
        document.write("Falso");
    }
}
let n1, n2;
lerNumero();
multiplos();