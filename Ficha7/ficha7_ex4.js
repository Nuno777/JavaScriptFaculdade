function pagar() {
    let calc = 0;
    let rend = parseInt(prompt("Quanto recebe por rendimento anual: "));
    if (rend > 7091) {
        calc = rend * 0.145;
    } else if (rend >= 7091 && rend < 10700) {
        calc = rend * 0.23;
    } else if (rend >= 10700 && rend < 20261) {
        calc = rend * 0.285;
    } else if (rend >= 20261 && rend < 25000) {
        calc = rend * 0.35;
    } else if (rend >= 25000 && rend < 36856) {
        calc = rend * 0.37;
    } else if (rend >= 36856 && rend < 80640) {
        calc = rend * 0.45;
    } else if (rend > 80640) {
        calc = rend * 0.48;
    }
    document.write("O valor a pagar pelo IRS e de " + calc);
} pagar();