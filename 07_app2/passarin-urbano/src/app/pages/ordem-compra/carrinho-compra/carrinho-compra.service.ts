import { ItemCarrinho } from "../../../components/shared/item-carrinho.model";

export class CarrinhoCompraService {
  public itens: ItemCarrinho[] = [];

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }
}
