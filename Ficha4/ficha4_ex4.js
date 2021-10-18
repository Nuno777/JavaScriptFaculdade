var soma = 0;
for (var i = 0; i < 101; i++) {
        if (i % 2 == 0) {
                document.write(i + " + ");
                soma += i;
        }

}
document.write("Soma de todos os numeros pares de 2 a 100 é: " + soma);