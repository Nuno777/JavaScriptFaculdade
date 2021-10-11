/*var mes;
mes = parseInt(prompt("Insira o numero do mes: "));
switch (mes) {
        case 1: document.write("Janeiro"); break;
        case 2: document.write("Fevereiro"); break;
        case 3: document.write("Março"); break;
        case 4: document.write("Abril"); break;
        case 5: document.write("Maio"); break;
        case 6: document.write("Junho"); break;
        case 7: document.write("Julho"); break;
        case 8: document.write("Agosto"); break;
        case 9: document.write("Setembro"); break;
        case 10: document.write("Outubro"); break;
        case 11: document.write("Novembro"); break;
        case 12: document.write("Dezembro"); break;
        default:
                document.write("Mes não encontrado");
                break;
}*/

let quit = true;
var cont = 0;
while (quit) {
        var opcao = prompt("R-Registar Pedido\nV-Valor a Pagar\nE-Dados Estatisticos\nT-Terminar\n\nEscolha uma opção: ");
        switch (opcao) {
                case 'r':
                case 'R':
                        alert("Opção de Registar");
                        break;
                case 'v':
                case 'V':
                        alert("Opção a Pagar");
                        break;
                case 'e':
                case 'E':
                        alert("Opção de Estatisticas");
                        break;
                case 't':
                case 'T':
                        quit = false;
                        alert("Opção de Sair");
                        break;
                default:
                        alert("Opção não encontrada");
                        break;
        }
        cont += 1;
}
cont -= 1;
alert("Deu " + cont + " voltas");
