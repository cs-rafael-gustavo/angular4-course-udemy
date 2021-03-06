import { Component, OnInit } from "@angular/core";
import { OrdemCompraService } from "./ordem.compra.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Pedido } from "../../components/shared/pedido.model";
import { CarrinhoCompraService } from "./carrinho-compra/carrinho-compra.service";
import { ItemCarrinho } from "src/app/components/shared/item-carrinho.model";

@Component({
  selector: "app-ordem-compra",
  templateUrl: "./ordem-compra.component.html",
  styleUrls: ["./ordem-compra.component.css"],
  providers: [OrdemCompraService],
})
export class OrdemCompraComponent implements OnInit {
  public formulario: FormGroup = new FormGroup({
    endereco: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(120),
    ]),
    numero: new FormControl(null, [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(20),
    ]),
    complemento: new FormControl(null),
    formaPagamento: new FormControl(null, Validators.required),
  });

  public idPedidoCompra: number;
  public itensCarrinho: ItemCarrinho[] = [];

  constructor(
    private ordemCompraService: OrdemCompraService,
    public carrinhoCompraService: CarrinhoCompraService
  ) {}

  ngOnInit() {
    this.itensCarrinho = this.carrinhoCompraService.exibirItens();
  }

  public confirmarCompra(): void {
    if (this.formulario.status === "INVALID") {
      this.formulario.markAllAsTouched();
    }

    if (this.carrinhoCompraService.exibirItens().length === 0) {
      alert("Você não selecionou nenhum item!");
    } else {
      let pedido: Pedido = new Pedido(
        this.formulario.value.endereco,
        this.formulario.value.numero,
        this.formulario.value.complemento,
        this.formulario.value.formaPagamento,
        this.carrinhoCompraService.exibirItens()
      );

      this.ordemCompraService
        .efetivarCompra(pedido)
        .subscribe((idPedido: number) => {
          this.idPedidoCompra = idPedido;
          this.carrinhoCompraService.limparCarrinho();
        });
    }
  }
}
