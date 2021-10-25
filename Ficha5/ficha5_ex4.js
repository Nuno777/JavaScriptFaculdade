let quit = true;
var quanti, dias, total = 0, totala = 0, totalb = 0, totalc = 0, totald = 0, totale = 0;
do {
        var opcao = prompt("A - BTT ou Montanha\nB - Estrada\nC - Lazer\nD - Elétrica\nE - Criança\nS - Sair\n\nEscolha uma opção: ");
        opcao = opcao.toUpperCase();
        if (opcao >= 'A' && opcao <= 'E') {
                dias = parseInt(prompt("Quantos dias de aluguer: "));
        }
        switch (opcao) {
                case 'A':
                        quanti = parseInt(prompt("Quantas bicicletas quer: "));
                        totala = quanti * dias * 12;
                        break;
                case 'B':
                        quanti = parseInt(prompt("Quantas bicicletas quer: "));
                        totalb = quanti * dias * 10;
                        break;
                case 'C':
                        quanti = parseInt(prompt("Quantas bicicletas quer: "));
                        totalc = quanti * dias * 7.5;
                        break;
                case 'D':
                        quanti = parseInt(prompt("Quantas bicicletas quer: "));
                        if (dias >= 4) {
                                totald = 15 * quanti * 0.15 * dias;
                        } else {
                                totald = quanti * dias * 15;
                        }
                        break;
                case 'E':
                        quanti = parseInt(prompt("Quantas bicicletas quer: "));
                        totale = quanti * dias * 5;
                        break;
                case 'S':
                        quit = false;
                        total = totala + totalb + totalc + totald + totale;
                        alert("Valor a pagar " + total);
                        break;
                default:
                        alert("Opção não encontrada");
                        break;
        }
} while (quit)
