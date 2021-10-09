/*Ex1
var num = parseInt(prompt("Insira um numero: "));
if (num == 0) {
        document.write("Nulo");
} else if (num > 0) {
        document.write("Positivo");
} else {
        document.write("Negativo");
}*/


/*Ex2
var num = parseInt(prompt("Insira um numero:"));
var resto=num%2;
if (resto === 0) {
        document.write("Par");
} else
        document.write("Impar");*/


/*Ex3
var num1, num2, num3, num4, classFinal;
num1 = parseInt(prompt("Insira a primeiro nota: "));
num2 = parseInt(prompt("Insira a segundo nota: "));
num3 = parseInt(prompt("Insira a terceira nota: "));
num4 = parseInt(prompt("Insira a quarta nota: "));
classFinal = 0.20 * num1 + 0.20 * num2 + 0.3 * num3 + 0.3 * num4;
if (classFinal>=9.5) {
        document.write("Aprovado - Classificação Final: " + classFinal);
}else
document.write("Reprovado - Classificação Final: " + classFinal);*/

/*Ex4*/
var ano = parseInt(prompt("Insira um ano: "));
if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) {
        document.write(ano, " é bisexto");
}

