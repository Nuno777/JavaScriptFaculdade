function carregar(){
    data=new Date();
    document.getElementById("msg").innerHTML="Horas: "+data.toLocaleTimeString('pt-BR');
   
}