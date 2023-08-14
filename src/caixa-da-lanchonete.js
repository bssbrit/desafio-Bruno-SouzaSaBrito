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
      let statusDoPedido;
      if (codigo == "chantily" || codigo == "queijo") {
        statusDoPedido = this.conferirExtras(codigo, itensComida);
      }
      quantidade = parseInt(quantidade);

      if (quantidade == 0) {
        return "Quantidade inválida!";
      } else if (statusDoPedido == false) {
        return "Item extra não pode ser pedido sem o principal";
      } else {
        let confirmacao = false;
        //for loop para achar o valor baseado no código da comida
        for (let y = 0; y < this.cardapio.length; y++) {
          if (codigo == this.cardapio[y].cod) {
            carrinhoDeCompra += this.cardapio[y].value * quantidade;
            confirmacao = true;
          }
        }
        if (confirmacao == false) return "Item inválido!";
      }
    }
    console.log(carrinhoDeCompra);
    return carrinhoDeCompra;
  }
  conferirExtras(codigo, itens) {
    let confirmar = false;
    if (codigo == "chantily") {
      for (let i = 0; i < itens.length; i++) {
        let [principal] = itens[i].split(",");
        if (principal == "cafe") confirmar = true;
      }
    } else {
      for (let i = 0; i < itens.length; i++) {
        let [principal] = itens[i].split(",");

        if (principal == "sanduiche") confirmar = true;
      }
    }
    return confirmar;
  }
  formaDePagamento(metodoDePagamento, carrinhoDeCompra) {
    switch (metodoDePagamento) {
      case "credito":
        return (carrinhoDeCompra * 1.03).toFixed(2);
        break;
      case "debito":
        return carrinhoDeCompra.toFixed(2);
        break;
      case "dinheiro":
        return (carrinhoDeCompra * 0.95).toFixed(2);
        break;
      default:
        return "Forma de pagamento inválida!";
        break;
    }
  }
  calcularValorDaCompra(metodoDePagamento, itens) {
    if (itens.length == 0) return "Não há itens no carrinho de compra!";

    let valor = this.calcularComida(itens, this.cardapio);

    if (typeof valor === "string") {
      return valor;
    } else {
      let valor2 = this.formaDePagamento(
        metodoDePagamento,
        this.calcularComida(itens, this.cardapio)
      );
      if (typeof valor2 === "string") {
        let resultado = valor2.replace(".", ",");
        return `R$ ${resultado}`;
      }
    }
  }
}
const xizao = new CaixaDaLanchonete();

console.log(
  xizao.calcularValorDaCompra("credito", ["combo2,1", "cafe,1", "chantily,2"])
  /*   xizao.calcularValorDaCompra("debito", ["combo2,1", "cafe,1", "chantily,2"]),
  xizao.calcularValorDaCompra("dinheiro", ["combo2,1", "cafe,1", "chantily,2"]) */
);
export { CaixaDaLanchonete };
