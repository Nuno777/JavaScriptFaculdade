var num,n1,n2,cont=0;

do{

  num=parseInt(prompt("1-Média\n2-diferença\n3-Produto\n4-Divisão\n0-Terminar\nOpção:"));
   if(num>=1 && num<=4){
     n1=parseInt(prompt("n1:"));
     n2=parseInt(prompt("n2:"));
   }
  switch(num){
      case 0: alert("Fim do programa");
              break;
      case 1:
              cont++;
              alert("Média:"+(n1+n2)/2);
              break;
      case 2:
              if(n1>=n2){
                 alert("Diferença:"+(n1-n2));
              }else{
                alert("Diferença:"+(n2-n1));  
              }   
              break;
      case 3:
             alert("Produto:"+(n1*n2));
              break; 
      case 4:
              if(n2==0){
                  alert ("divisão impossivél:");
              }else{
                alert("Divisão:"+ (n1/n2));
              }  
              break;   
      default: alert("opção errada, termina o programa:");            
  }


}while(num>=1 && num<=4);

alert("escolheu a opção média: " + cont  );