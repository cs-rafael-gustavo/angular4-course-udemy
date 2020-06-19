import { Component, OnInit } from "@angular/core";
import { OrdemCompraService } from "./ordem.compra.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Pedido } from "../../components/shared/pedido.model";
import { CarrinhoCompraService } from "./carrinho-compra/carrinho-compra.service";

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

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoCompraService: CarrinhoCompraService
  ) {}

  ngOnInit() {
    console.log(
      "Ordem-Compra - Array de itens do carrinho: ",
      this.carrinhoCompraService.exibirItens()
    );
  }

  public confirmarCompra(): void {
    if (this.formulario.status === "INVALID") {
      this.formulario.markAllAsTouched();
    }

    let pedido: Pedido = new Pedido(
      this.formulario.value.endereco,
      this.formulario.value.numero,
      this.formulario.value.complemento,
      this.formulario.value.formaPagamento
    );

    this.ordemCompraService
      .efetivarCompra(pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido;
      });
  }
}
