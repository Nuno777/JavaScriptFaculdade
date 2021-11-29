//Função menu- não recebe informação e devolve a opção escolhida
function menu() {
    let opcao;
    do {
        opcao = prompt('V-Vendas\n\n F-Faturação\n\nT-Terminar').toUpperCase();
		if (opcao != 'V' && opcao != 'F' && opcao != 'T'){
			alert("Erro- valor inválido!");
		}	
    } while (opcao != 'V' && opcao != 'F' && opcao != 'T');

    return opcao;//devolve
}
// função lerArtigo- não entra informação e devolve a opção
function lerArtigo() {
    let p;
   do{
    p = parseInt(prompt("1-cadernos\n2-canetas\n3-Lápis\n4-Borracha\n0-Sair"));
    if(p<0|| p>4 || isNaN(p)){
        alert("Dados errados");
    }
   }while(p<0 || p>4 || isNaN(p));
    return p;//devolve
}
// função lerArtigo- não entra informação e devolve a opção
function lerQuant() {
    let q;
    do {
        q= parseInt(prompt('Insira a quantidade desejada:'));
		if (isNaN(q) || q <= 0){
			alert("Erro dados");
		}	
    } while (isNaN(q) || q<= 0);
    return q;//devolve
}

// função lerArtigo- Entra informação(artigo-at, quantidade-qtc) e devolve a opção
function calculaPreco(at, qtc) {
    let precoAp;

    switch (at) {
        case 1: precoAp = 1.5 * qtc;
            break;
        case 2:
        case 3: precoAp = 0.5 * qtc;
            break;
        case 4: precoAp = 2 * qtc;
            break;
    }

    return precoAp;
}

function escreveFact(valorF) {

    alert("Total faturado: " + valorF +"€"+ "\nLucro: " + (valorF * 0.3).toFixed(2)+"€");
}


/*--------Programa Principal----------*/
let op, art, qt, prec, totalPrec = 0,total=0;
do {
    op = menu();
    switch (op) {
        case 'V':/*vendas*/
            do {
                art = lerArtigo();
                if (art != 0) {
                    qt = lerQuant();
                    prec = calculaPreco(art, qt);
                    alert("Tem a pagar:" + prec + "€ por " + qt + "artigos");
                    totalPrec = totalPrec + prec;
                }
            } while (art != 0);
            alert("Valor Total a pagar: " + totalPrec+"€");
            total+=totalPrec;
            totalPrec=0;
            break;
        case 'F':/*Faturação*/
            escreveFact(total);
            break;
        case 'T':/*Terminar*/
            alert("fim programa");
            break;
    }
} while (op != 'T');
