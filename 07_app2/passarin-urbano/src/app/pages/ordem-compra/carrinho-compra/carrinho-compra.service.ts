import { ItemCarrinho } from "../../../components/shared/item-carrinho.model";
import { Oferta } from "../../../components/shared/oferta.model";

export class CarrinhoCompraService {
  public itens: ItemCarrinho[] = [];

  public exibirItens(): ItemCarrinho[] {
    return this.itens;
  }

  public incluirItem(oferta: Oferta): void {
    let itemCarrinho: ItemCarrinho = new ItemCarrinho(
      oferta.id,
      oferta.imagens[0],
      oferta.titulo,
      oferta.descricao_oferta,
      oferta.valor,
      1
    );
    console.log(
      "Oferta recebida no Serviço e transformada em ItemCarrinho",
      itemCarrinho
    );
  }
}
