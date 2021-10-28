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

