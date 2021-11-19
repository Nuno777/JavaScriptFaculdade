//funcao que nao recebe
function menu() {
    let esc;
    esc = prompt("V-Vendas\nF-Faturação\nT-Terminar\n\nEscolha a opção: ").toUpperCase();

    return esc;
}

//funcao que nao recebe
function lerArtigo() {
    let p;
    p = parseInt(prompt("1-Cadernos\n2-Canetas\n3-Lapis\n4-Borrachas"));

    return p;
}

function lerQuant() {
    let q;
    q = parseInt(prompt("Quantidade de produto: "));

    return q;
}

//funcao que devolve o artigo e quantidade
function calculaPreco(at, qtr) {
    let precoAP;
    switch (at) {
        case 1:
            precoAP = 1.5 * qtr;
            break;
        case 2:
        case 3:
            precoAP = 0.5 * qtr;
            break;
        case 4:
            precoAP = 2 * qtr;
            break;

        default:
            break;
    }

    return precoAP;
}

function escreveFatu(valorF) {
    alert("Total faturado " + valorF + "\nLucro " + valorF * 0.3);

}

let op, art, qt, prec, totalPreco = 0;
let sair = true;
do {
    op = menu();
    switch (op) {
        case 'V':
            art = lerArtigo();
            qt = lerQuant();
            prec = calculaPreco(art, qt);
            alert("Tem a pagar " + prec + "€ por " + qt + " artigo(s)");
            totalPreco = totalPreco + prec;
            break;
        case 'F':
            escreveFatu(totalPreco);
            break;
        case 'T':
            sair = false;
            break;

        default:
            alert("Opção invalida");
            break;
    }
} while (sair);