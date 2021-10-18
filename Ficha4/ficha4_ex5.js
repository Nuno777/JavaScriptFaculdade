var nota, soma = 0, media = 0;

for (var i = 0; i < 5; i++) {
        do {
                nota = parseInt(prompt("Insira uma nota: "));
                if (isNaN(nota) ||nota < 0 || nota > 20) {
                        alert("Nota invalida");
                }
        } while (isNaN(nota) || nota < 0 || nota > 20);//verificação para nao passar nem -1 nem 21 ou mais
        soma += nota;
}
media = soma / i;
document.write("Media geral: " + media);

