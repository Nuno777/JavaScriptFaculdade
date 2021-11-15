function lerNumero() {
    let sair = true;
    do {
        num = parseInt(prompt("Insira um numero de 1 a 100: "));
        if (num < 1 || num > 100) {

            sair = true;
        }
        else {
            sair = false;
            return num;

        }
    } while (sair);
}

function calcSomatorio() {
    for (i = 0; i < num; i++) {
        somatorio = num + i;
    }
    alert("Somatorio de " + num + " e " + somatorio);
    return somatorio;
}
 let num,somatorio;
num = lerNumero();
somatorio = calcSomatorio();
