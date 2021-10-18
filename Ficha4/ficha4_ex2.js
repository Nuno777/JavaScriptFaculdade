var soma=0;
var num=101;
for (var i = 1; i < num; i++) {
        document.write(i+ " + ");
        soma+=i;
}
document.write("Soma de todos os numeros de 1 a 100 é: "+soma);