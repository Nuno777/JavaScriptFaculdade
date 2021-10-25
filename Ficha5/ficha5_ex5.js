let quit = true;
var quanti, dias, total = 0;
do {
        var opcao = prompt("A - Produto A\nB - Produto B\nC - Produto C\nS - Sair\n\nEscolha uma opção: ");
        opcao = opcao.toUpperCase();
        if (opcao >= 'A' && opcao <= 'C') {
                quanti = parseInt(prompt("Quantos produtos quer: "));
        }
        switch (opcao) {
                case 'A':
                        if (quanti >= 5) {
                                quanti = 16.50 * quanti * 0.17;
                                total = quanti * 0.10;
                        } else {
                                total = 16.50 * quanti * 0.17;
                        }

                        break;
                case 'B':
                        if (quanti >= 5) {
                                quanti = 16.50 * quanti * 0.17;
                                total = quanti * 0.10;
                        } else {
                                total = 16.50 * quanti * 0.17;
                        }

                        break;
                case 'C':
                        if (quanti >= 5) {
                                quanti = 16.50 * quanti * 0.17;
                                total = quanti * 0.10;
                        } else {
                                total = 16.50 * quanti * 0.17;
                        }

                        break;
                case 'S':
                        quit = false;

                        alert("Valor a pagar " + total);
                        break;
                default:
                        alert("Opção não encontrada");
                        break;
        }
} while (quit)
