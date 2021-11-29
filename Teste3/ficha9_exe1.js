//ler salário

function lerSalario() {
    do {
        var salario = prompt('Insira o salário base[superior a 400]:');
        if (isNaN(salario) || salario < 400) {
            alert('Salário Inválido. Insira novamente.');
        }
    } while (isNaN(salario) || salario < 400);
    return parseFloat(salario);
}

function leUnidades() {
    do {
        var unidades = prompt('Insira a quantidade de unidades[superior a 0]:');
        if (isNaN(unidades) || unidades <0) {
            alert('Insira uma quantidade válida.');
        }
    } while (isNaN(unidades) || unidades < 0);

    return parseInt(unidades);
}

function Aumento(sal, uni) {
    var au=0;
    if (sal >= 400 && sal < 500 && uni > 100) {
        au = sal * 0.09;
    } else if (sal < 750 && uni > 110) {
        au = sal * 0.11;
    } else if (uni > 120) {
        au = sal * 0.14;
    }
    return au;
}

function salarioMensal(s, aum) {
    return parseFloat(s + aum);

}

//Programa principal

    var s = lerSalario();
    var u = leUnidades();
    var am = Aumento(s, u);
    var sl = salarioMensal(s, am);

alert('O aumento foi de ' + am.toFixed(2) + ' e o salário Mensal é de ' + salarioMensal(s, am).toFixed(2));