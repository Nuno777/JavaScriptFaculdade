let num = [], v;
for (let i = 0; i <= 4; i++) {
    v = parseInt(prompt("Insira um numero: "));
    num.push(v);
    document.write("Numero [" + i + "] = " + num[i] + "</br>");
}