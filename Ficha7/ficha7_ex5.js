function loja() {
    let preco, desc;
    let op = prompt("A-16.50€\nB-6250€\nC-22500€\n\nInsira uma opção: ");
    op = op.toUpperCase();
    switch (op) {
        case 'A':
            preco = 16.50 * 0.17;
            break;
        case 'B':
            preco = 6250 * 0.12;
            break;
        case 'C':
            preco = 22500 * 0.05;
            break;
        default:
            alert("Opção errada");
            break;
    }
    document.write("Preço a pagar "+preco);
} loja();