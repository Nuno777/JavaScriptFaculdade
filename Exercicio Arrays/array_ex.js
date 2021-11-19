function lerNumero(texto) {
    let n;
    n = parseInt(prompt(texto));

    return n;
}

function lerVetor(lim) {
    let v = [];
    for (let i = 0; i < lim; i++) {
        v.push(lerNumero("Notas [" + i + "]="));
    }
    return v;
}

function somaNotas(v) {
    let s = 0;
    for (let i = 0; i < v.length; i++) {
        s = s + v[i];
    }
    return s;
}

function mostrarVetor(vect) {
    for (let i = 0; i < vect.length; i++) {
        document.write("Notas[" + i + "]=" + vect[i] + "<br>");
    }
}

function melhorNota() {

}

function piorNota() {

}

let notas = [], numEst, s;
numEst = lerNumero("Quantidade de estudantes: ");
notas = lerVetor(numEst);
mostrarVetor(notas);
s = somaNotas(notas);
alert("Media das notas: " + s / numEst);