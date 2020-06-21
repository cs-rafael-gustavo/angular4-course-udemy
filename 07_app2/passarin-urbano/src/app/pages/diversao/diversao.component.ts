import { Component, OnInit } from "@angular/core";
import { Oferta } from "../../components/shared/oferta.model";
import { OfertasService } from "../oferta/ofertas.service";

@Component({
  selector: "app-diversao",
  templateUrl: "./diversao.component.html",
  styleUrls: ["./diversao.component.css"],
  providers: [OfertasService],
})
export class DiversaoComponent implements OnInit {
  public ofertas: Array<Oferta> = [];

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertasService
      .getOfertasPorCategoria("diversao")
      .then((ofertas: Array<Oferta>) => {
        this.ofertas = ofertas;
      });
  }
}
