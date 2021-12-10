(function () {
    alert("Pagina carregada...");
    document.body.style.backgroundColor = "Gray";
})();

function button1() {
    alert("O botão foi pressionado");
}
function button2() {
    alert(new Date());
}

function clica() {
    let c = document.getElementById("caixa");
    alert(c.value);
}

function maisc() {
    let m = document.getElementById("texto");
    alert(m.value.toUpperCase());
}

function minus() {
    let m = document.getElementById("texto");
    alert(m.value.toLowerCase());
}

function imgMudar() {
    let i, imagem = document.querySelector("img");
    i = imagem.getAttribute("src");
    if (i == "images/chuva.jpg") {
        imagem.setAttribute("src", "images/sol.jpg");
    } else {
        imagem.setAttribute("src", "images/chuva.jpg");
    }
}


