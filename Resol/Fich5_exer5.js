var op,qt,d,v,totalB=0,Piva;


do{
  op=prompt("Produtos:\nA\nB\nC\nS-Sair");
  op=op.toUpperCase();
  
  switch(op){
      case 'A':
             qt=parseInt(prompt("Quantas produtos tipo A:"));
             totalB+=qt; //conta o total de produtoss
             v=16.50*qt;
             d=v*0.10;
             v=v-d;
             Piva=v+v*0.17;
             break;
      
      case 'B':
            
            qt=parseInt(prompt("Quantas produtos tipo B:"));
            v=6250*qt; //conta o total de produtos
            d=v*0.05;
            v=v-d;
            Piva=v+v*0.12;
            break; 
      case 'C':
            
            qt=parseInt(prompt("Quantas produtos tipo C:"));
            totalB+=qt; //conta o total de produtos
            v=22500*qt;
            d=v*0.03;
            v=v-d;
            Piva=v+v*0.05;
            break; 
      
     case 'S':
                alert("Terminou o programa");
                break;       
      default: 
             alert("opção errada");      

  }

}while(op>='A' && op<='C');

alert("valor total a pagar:\nTotal de produtos:"+totalB+"\npagar "+Piva + " €");