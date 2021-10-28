/* var flores, total = 0, cont = 0, totalcont = 0, desc, valor = 0;
let sair = true;
do {
    var op = prompt("A-Rosas\nB-Orquidas\nC-Cravos\nD-Estrelicia\nS-Sair/Pagar\n\nEscolha uma opção: ");
    op = op.toUpperCase();
    if (op >= 'A' && op <= 'D') {
        flores = parseInt(prompt("Quantas flores: "));
    }
    switch (op) {
        case 'A': if (flores >= 5) {
            totalcont += flores;
            // valor = 7 * flores;
            // desc=valor*0.10;
            // valor=valor-desc;
            // total=valor+valor;
            total = 7 * flores * 0.10;
        } else
            totalcont += flores;
            total = 7 * flores;
            break;
        case 'B':
            totalcont += flores;
            total = flores * 15;
            break;
        case 'C':
            totalcont += flores;
            total = flores * 2;
            break;
        case 'D':
            totalcont += flores;
            total = flores * 8;
            break;
        case 'S': sair = false;
            alert("Total a pagar de " + total + "\n\nTotal de flores " + totalcont);
            break;
        default:
            alert("Opção invalida");
            break;
    }
} while (sair); */

/* var j, i;
for (i = 1; i <= 5; i++) {
    if (i % 2 == 0) {
        document.write("--**--");
    } else {
        for (j = 1; j <= i; j++) {
            document.write("*");
        }
    } 
    document.write("<br>")

} */

/* var num=parseFloat(prompt("Insere um numero: "));
alert("Triplo "+num*3); */

var op,d, desc=0, cont=0, totalF=0;

do{
    op=prompt("Classe do Carro:\nA-\nB-\nC\nT-terminar");
    op=op.toUpperCase();

  if(op>='A' && op<='C'){  
    d=parseInt(prompt("Quantidade de dias"));
    if(d>=6){
        desc=0.20;
    }else {
        desc=0;
    }
  }  
switch(op){
    case 'A':
        prec=(90*d)- (90*d)*desc;
        totalF=totalF+prec;
        alert("valor a pagar "+ prec);
        break;
    case 'B':
          prec=150*d -150*d*desc;
          totalF=totalF+prec;
          alert("valor a pagar "+ prec);
         break;
    case 'C':
        cont++;
          prec=200*d-200*d*desc;
          totalF=totalF+prec;
          alert("valor a pagar "+ prec);
         break;
    case 'T': alert("terminou o programa");
          break;              
    default:alert("opção errada:");      
}

}while(op>='A' && op<='C');

alert("Quantidade de carros alugados da classe C:"+cont);
alert("Total Faturado: "+ totalF);

