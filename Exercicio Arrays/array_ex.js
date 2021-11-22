function lerNumero(texto) {
    let n;
    do {
        n = parseInt(prompt(texto));
        if (n <= 0) {
            alert("Não tem estudantes suficientes");
        } else {
            return n;
        }
    } while (n <= 0 || isNaN(n));
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

function melhorNota(v) {
    let melhor;
    melhor = v[0];
    for (let i = 0; i < v.length; i++) {
        if (melhor < v[i]) {
            melhor = v[i];
        }
    }
}

function piorNota(v) {
    let pior;
    pior = v[0];
    for (let i = 0; i < v.length; i++) {
        if (pior > v[i]) {
            pior = v[i];
        }
    }
}

let notas = [], numEst, s, m, p;
numEst = lerNumero("Quantidade de estudantes: ");
notas = lerVetor(numEst);
mostrarVetor(notas);
s = somaNotas(notas);
alert("Media das notas: " + s / numEst);
m = melhorNota(notas);
p = piorNota(notas);
document.write("Melhor nota: " + m + "</br>Pior nota: " + p);
