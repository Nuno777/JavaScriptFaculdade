var num1, num2, num3, num4, classFinal;
num1 = parseInt(prompt("Insira a primeiro nota: "));
num2 = parseInt(prompt("Insira a segundo nota: "));
num3 = parseInt(prompt("Insira a terceira nota: "));
num4 = parseInt(prompt("Insira a quarta nota: "));
classFinal = 0.20 * num1 + 0.20 * num2 + 0.3 * num3 + 0.3 * num4;
if (classFinal>=9.5) {
        document.write("Aprovado - Classificação Final: " + classFinal);
}else
document.write("Reprovado - Classificação Final: " + classFinal);