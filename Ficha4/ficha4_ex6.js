var num, mult = 0;
do {
    num = parseInt(prompt("Insira um numero para a tabuada: "));
    if (num < 0 || num > 10) {
        alert("Erro");
    }
} while (num < 0 || num > 10);
for (var i = 0; i < 11; i++) {
    document.write(num + " * " + i + " = " + (num * i) + "<br />");
}
