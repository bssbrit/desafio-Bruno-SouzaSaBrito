class CaixaDaLanchonete {
  cardapio = [
    { cod: "cafe", value: 3.0 },
    { cod: "chantily", value: 1.5 },
    { cod: "suco", value: 6.2 },
    { cod: "sanduiche", value: 6.5 },
    { cod: "queijo", value: 2.0 },
    { cod: "salgado", value: 7.25 },
    { cod: "combo1", value: 9.5 },
    { cod: "combo2", value: 7.5 },
  ];

  calcularComida(itensComida) {
    let carrinhoDeCompra = 0;
    for (let i = 0; i < itensComida.length; i++) {
      //cada item do array é divido em duas variáveis
      let [codigo, quantidade] = itensComida[i].split(",");
      quantidade = parseInt(quantidade);
      if (quantidade == 0) {
        return console.log("Quantidade Inválida");
      } else {
        let confirmacao = false;
        //for loop para achar o valor baseado no código da comida
        for (let y = 0; y < this.cardapio.length; y++) {
          if (codigo == this.cardapio[y].cod) {
            carrinhoDeCompra += this.cardapio[y].value * quantidade;
            confirmacao = true;
          }
        }
        if (confirmacao == false) return console.log("codigo inválido");
      }
    }
    console.log(carrinhoDeCompra);
    return carrinhoDeCompra;
  }
  formaDePagamento(metodoDePagamento, carrinhoDeCompra) {
    switch (metodoDePagamento) {
      case "credito":
        return carrinhoDeCompra * 1.05;
        break;
      case "debito":
        return carrinhoDeCompra;
        break;
      case "dinheiro":
        return carrinhoDeCompra * 0.95;
        break;
      default:
        console.log("Forma de pagamento inválida!");
        break;
    }
  }
  calcularValorDaCompra(metodoDePagamento, itens) {
    console.log(metodoDePagamento);
    return `R$${this.calcularComida(itens)}`;
  }
}

const xizao = new CaixaDaLanchonete();
xizao.calcularComida(["combo1,1", "combo1,1", "cafi,2"]);
/* console.log(
  xizao.calcularValorDaCompra(1, ["combo1,1", "combo2,1", "salgado,2"])
); */
let valor = xizao.calcularComida(["combo1,1", "combo2,1", "salgado,2"]);
console.log(xizao.formaDePagamento("credito", valor));
export { CaixaDaLanchonete };
