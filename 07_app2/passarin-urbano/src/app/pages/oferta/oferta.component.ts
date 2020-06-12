import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OfertasService } from "../../ofertas.service";
import { Oferta } from "./../../components/shared/oferta.model";

@Component({
  selector: "app-oferta",
  templateUrl: "./oferta.component.html",
  styleUrls: ["./oferta.component.css"],
  providers: [OfertasService],
})
export class OfertaComponent implements OnInit {
  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasServices: OfertasService
  ) {}

  ngOnInit(): void {
    this.ofertasServices
      .getOfertaPorId(this.route.snapshot.params["id"])
      .then((oferta: Oferta) => {
        this.oferta = oferta;
      });

    this.route.params.subscribe(
      (params: any) => {
        console.log(params);
      },
      (err: any) => {
        console.log(err);
      },
      () => console.log("Processamento classificado como concluído")
    );
  }
}
