let quit = true;
var quanti = 0, dias = 0,soma=0;
do {
        var opcao = prompt("A - BTT ou Montanha\nB - Estrada\nC - Lazer\nD - Elétrica\nE - Criança\nS - Sair\n\nEscolha uma opção: ");
        switch (opcao) {
                case 'a':
                case 'A':
                        quanti = parseInt(prompt("Quantas bicicletas quer: "));
                        dias = parseInt(prompt("Quantos dias de aluguer: "));
                        dias=dias*12;
                        soma=quanti+dias;
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
                        alert("Sair");
                        break;
                default:
                        alert("Opção não encontrada");
                        break;
        }
} while (quit)