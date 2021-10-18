var num, cont = 0, nulo = true;
/* do {
    do {
        num = parseInt(prompt("Insira um numero: "));
        if (isNaN(num) || num < 0||num==0) {
            alert("Valor negativo ou NULL introduzido");
            cont--;
            nulo = false;
        }
        cont++;
    } while (isNaN(num) || num < 0||num==0);
} while (nulo); */
do {
    num = parseInt(prompt("Insira um numero: "));
    cont++;
} while (isNaN(num) || num>0);
document.write("Quantidade de valores: " + (cont-1));
