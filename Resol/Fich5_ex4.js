var op,qt,d,v,totalB=0;


do{
  op=prompt("A-BTT ou Montanha\nB-Estrada\nC-Lazer\nD-Elétrica\nE-Criança\nS-Sair\nOpção:");
  op=op.toUpperCase();
  if(op>='A' && op<='E'){
    d=parseInt(prompt("número de dias:"));
  }
  switch(op){
      case 'A':
             alert("A-BTT ou Montanha");
             qt=parseInt(prompt("Quantas bicicletas quer alugar:"));
             totalB+=qt; //conta o total de bicicletas alugadas
             v=12*d*qt;
             break;
      
      case 'B':
            alert("B-Estrada");
            qt=parseInt(prompt("Quantas bicicletas quer alugar:"));
            v=10*d*qt; //conta o total de bicicletas alugadas
            break; 
      case 'C':
            alert("C-Lazer");
            qt=parseInt(prompt("Quantas bicicletas quer alugar:"));
            totalB+=qt; //conta o total de bicicletas alugadas
            v=7.5*d*qt;
            break; 
      case 'D':
             alert("D-Elétrica");
             qt=parseInt(prompt("Quantas bicicletas quer alugar:"));
             totalB+=qt; //conta o total de bicicletas alugadas
              if(d>=4){
                  v=15*d*1.15*qt;
              }else{
                  v=15*d*qt;
              }
            
            break; 
      case 'E':
             alert("E-Criança");
             qt=parseInt(prompt("Quantas bicicletas quer alugar:"));
             totalB+=qt;//conta o total de bicicletas alugadas
             v=5*d*qt;
            
            break; 
     case 'S':
                alert("Terminou o programa");
                break;       
      default: 
             alert("opção errada");      

  }

}while(op>='A' && op<='E');

alert("valor total a pagar:\nNúmero de Dias:"+ d +"\nTotal de bicicletas:"+totalB+"\npaga "+v + " €");