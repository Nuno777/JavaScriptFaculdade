let quit = true;
var quanti = 0, Valor = 0, descon = 0, total = 0, totalP = 0;
do {
        var opcao = prompt("A - Produto A\nB - Produto B\nC - Produto C\nS - Sair\n\nEscolha uma opção: ");
        opcao = opcao.toUpperCase();
        if (opcao >= 'A' && opcao <= 'C') {
                quanti = parseInt(prompt("Quantos produtos quer: "));
        }
        switch (opcao) {
                case 'A':
                        totalP += quanti;
                        if (quanti >= 5) {
                                valor = 16.50 * quanti;
                                descon = valor * 0.10;
                                valor = valor - descon;
                                total = valor + valor * 0.17;
                        } else {
                                //Sem desconto, mas com IVA

                        }

                        break;
                case 'B':
                        totalP += quanti;
                        if (quanti >= 5) {
                                valor = 6250 * quanti;
                                descon = valor * 0.05;
                                valor = valor - descon;
                                total = valor + valor * 0.12;
                        } else {

                        }

                        break;
                case 'C':
                        totalP += quanti;
                        if (quanti >= 5) {
                                valor = 22500 * quanti;
                                descon = valor * 0.03;
                                valor = valor - descon;
                                total = valor + valor * 0.05;
                        } else {

                        }

                        break;
                case 'S':
                        quit = false;
                        alert("Quantidade de produtos " + totalP + "\nValor a pagar " + total + "€");
                        break;
                default:
                        alert("Opção não encontrada");
                        break;
        }
} while (quit)
