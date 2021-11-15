function lerNumero() {
    let sair = true;
    do {
        i = parseInt(prompt("Insira um numero de 1 a 100: "));
        for (let i = 1; i <= 100; i++) {
            sair = false;
            return i;
        }

    } while (sair);
}

function calcSomatorio(somatorio) {

    return somatorio;
}

i = lerNumero();
somatorio = calcSomatorio();