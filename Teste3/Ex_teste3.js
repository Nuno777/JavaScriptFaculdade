//devolve a opçao escolhida, tipo dados numeros
function menu() {
    let esc;
    esc = parseInt(prompt("1-Preenche Vetor\n2-Mostra Vetor\n3-Média Valores Vetor\n4-Produto Valores Vetor\n5-Retirar Zeros do Vetor\n6-Conta NºPares que existe no Vetor\n7-Conta NºPrimos que existe no Vetor\n8-Sair\nEscolha uma opção: "));
    return esc;
}

function tamanhoVetor(texto) {
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

function preencheVetor(lim) {
    let v = [];
    for (let i = 0; i < lim; i++) {
        v.push(tamanhoVetor("Notas [" + i + "]="));
    }
    return v;
}

function mostrarVetor(vect) {
    for (let i = 0; i < vect.length; i++) {
        alert("Notas[" + i + "]=" + vect[i] + "\n");
    }
}

function mediaVetor() {

}

let op; //opçao do menu
let vet = []; //vector
let numEsc; //tamanho do vector
let sair = true;
do {
    op = menu();
    switch (op) {
        case 1:
            numEsc = tamanhoVetor("Tamanho do vetor: ");
            vet = preencheVetor(numEsc);
            break;
        case 2:
            mostrarVetor(vet);
            break
        case 3:

            break
        case 4:
            break
        case 5:
            break
        case 6:
            break
        case 7:
            break
        case 8:
            sair = false;
            break
        default:
            alert("Opção errada")
            break;
    }
} while (sair);
