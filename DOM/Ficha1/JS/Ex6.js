function carregar(){
    data=new Date().getTime() / 1000;
    document.getElementById("msg").innerHTML="Horas: "+data.toLocaleTimeString('pt-BR');
   
}