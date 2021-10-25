let quit = true;
var cont = 0;
do {
        var opcao = prompt("R-Registar Pedido\nV-Valor a Pagar\nE-Dados Estatisticos\nT-Terminar\n\nEscolha uma opção: ");
        switch (opcao) {
                case 'a':
                case 'A':

                        break;
                case 'B':
                case 'b':

                        break;
                case 'c':
                case 'C':

                        break;
                case 'd':
                case 'D':

                        break;
                case 'e':
                case 'E':
                        break;
                case 's':
                case 'S':
                        quit = false;
                        alert("Opção de Sair");
                        break;
                default:
                        alert("Opção não encontrada");
                        break;
        }
} while (quit)