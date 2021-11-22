let num = [], v, quant;
do {
    quant = parseInt(prompt("Quantos numeros quer: "));
    for (let i = 0; i < quant; i++) {
        v = parseInt(prompt("Insira um numero: "));
        num.push(v);
        document.write("Numero [" + i + "] = " + num[i] + "</br>");
    }
} while (quant < 0 || isNaN(quant));

