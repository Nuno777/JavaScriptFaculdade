function calcularMedia(vetor) {
    let soma = 0;
    for (let a = 0; a < 4; a++) {
        soma = soma + vetor[a];
    }
    media=soma/array.length;
    return media;
}

function lerVetor() {
    let num = [], v, quant;
    do {
        quant = parseInt(prompt("Quantos numeros quer: "));
        for (let i = 0; i < quant; i++) {
            v = parseInt(prompt("Insira um numero: "));
            num.push(v);
            document.write("Numero [" + i + "] = " + num[i] + "</br>");
        }

    } while (quant < 0 || isNaN(quant));
    return num;
}


let media,vet,s;
vet = lerVetor();
media = calcularMedia();
document.write("Media " + media);

