function media(num1,num2, media) {
    for (var i = 1; i < 2; i++) {
        num1 = parseInt(prompt("Insira um numero"));
        num2 = parseInt(prompt("Insira um numero"));
    }
    media = (num1 + num2) / 2;
    document.write("Media das notas: " + media);
}
media();