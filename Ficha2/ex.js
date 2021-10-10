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

/*Ex4
var ano = parseInt(prompt("Insira um ano: "));
if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) {
        document.write(ano, " é bisexto");
}else{
        document.write(ano, " é normal");
}*/

/*Ex5
var mes;
mes = parseInt(prompt("Insira o numero do mes: "));
switch (mes) {
        case 1: document.write("Janeiro"); break;
        case 2: document.write("Fevereiro"); break;
        case 3: document.write("Março"); break;
        case 4: document.write("Abril"); break;
        case 5: document.write("Maio"); break;
        case 6: document.write("Junho"); break;
        case 7: document.write("Julho"); break;
        case 8: document.write("Agosto"); break;
        case 9: document.write("Setembro"); break;
        case 10: document.write("Outubro"); break;
        case 11: document.write("Novembro"); break;
        case 12: document.write("Dezembro"); break;
        default:
                document.write("Mes não encontrado");
                break;
}*/

/*Ex6
var limite;
limite=parseInt(prompt("Insira um numero: "));
for (var i = 1; i <= limite; i++) {
        document.write(i+"\n"); 
}*/


var soma;
for (var i = 1; i <= 100; i++) {
        //soma += i;
        document.write(i+ " + ");
        
}soma=soma+i;

document.write("Soma de todos os numeros de 1 a 100 é: "+soma);
