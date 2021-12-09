(function () {
    alert("Pagina carregada...");
    document.body.style.backgroundColor="red";
})();

function button1() {
    alert("O botão foi pressionado");
}
function button2() {
    alert(new Date());
}

function clica() {
    let c=document.getElementById("caixa");
    alert(c.value);
}

function maisc() {
    let m=document.getElementById("tex");
    //let me = m.toLocaleLowerCase();
    if(m.value!=""){
        m.value=m.value.toLocaleUppercase();
    }
   
 
}