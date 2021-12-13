function mudarCor(cor) {
    let c = document.querySelector("#cor");
    c.style.backgroundColor = cor;
}

function addLista() {
    //criar elemento (li)
    let x = document.createElement("li");
    //inserir conteudo ao elemento(tag)
    let y = document.getElementById("texto");
    x.textContent = y.value; /*ou*/// x.innerHTML=y.Value;
    //adicionar o elemento a um elemento (body)
    let b = document.querySelector("ul");
    b.appendChild(x);
}

function limparLista() {
    //vai selecionar o elemento
    let x = document.querySelector("ul");
    //vai limpar e vai ficar vazio
    x.textContent = "";
}

let index = 0;
function carrocel() {
    let x = document.querySelectorAll("div#ex3 img");
    for (let i = index; i < x.length; i++) {
        x[i].style.display = "none";
    }
    index++;
    if (index > (x.length - 1)) {
        index = 0;
    }
    x[index].style.display = "block";
}
setInterval(carrocel, 1000);
