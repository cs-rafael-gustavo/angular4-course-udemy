import { Component, OnInit } from "@angular/core";
import { OfertasService } from "../oferta/ofertas.service";
import { Oferta } from "../../components/shared/oferta.model";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
  providers: [OfertasService],
})
export class HomeComponent implements OnInit {
  public ofertas: Oferta[];

  constructor(private ofertasServices: OfertasService) {}

  ngOnInit(): void {
    this.ofertasServices
      .getOfertas()
      .then((ofertas: Oferta[]) => {
        this.ofertas = ofertas;
      })
      .catch((param: any) => param);
  }
}
