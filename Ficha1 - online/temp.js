function temperaturas() {
    let vet = [];
    let temp = document.getElementsByTagName("input");

    for (let i = 0; i < temp.length; i++) {
        console.log("i=" + i + " " + temp[i].value);
        if (temp[i].value != "") {
            vet.push(parseInt(temp[i].value));
        }
    }
    alert(vet);
}