import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { OfertasService } from "./ofertas.service";
import { Oferta } from "./../../components/shared/oferta.model";
import { CarrinhoCompraService } from "../ordem-compra/carrinho-compra/carrinho-compra.service";
import { ItemCarrinho } from "./../../components/shared/item-carrinho.model";

@Component({
  selector: "app-oferta",
  templateUrl: "./oferta.component.html",
  styleUrls: ["./oferta.component.css"],
  providers: [OfertasService, CarrinhoCompraService],
})
export class OfertaComponent implements OnInit, OnDestroy {
  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoCompraService: CarrinhoCompraService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.ofertasService.getOfertaPorId(params.id).then((oferta: any) => {
        this.oferta = oferta;
      });
    });
  }

  public adicionarItemCarrinho(): void {
    this.carrinhoCompraService.incluirItem(this.oferta);
  }

  ngOnDestroy(): void {}
}
