var nota=0;
do {
    nota = parseFloat(prompt("Insira a sua nota: "));
    if (nota < 0 || nota > 20) {
        alert("Nota invalida");
    }
} while (nota < 0 || nota > 20);
if (nota < 9.5) {
    document.write("Insuficiente");
} else if (nota >= 9.5 && nota < 13) {
    document.write("Suficiente");
} else if (nota >= 13 && nota < 16) {
    document.write("Bom");
}
else {
    document.write("Muito Bom");
}