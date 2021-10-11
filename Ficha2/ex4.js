var ano = parseInt(prompt("Insira um ano: "));
if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0))) {
        document.write(ano, " é bisexto");
}else{
        document.write(ano, " é normal");
}