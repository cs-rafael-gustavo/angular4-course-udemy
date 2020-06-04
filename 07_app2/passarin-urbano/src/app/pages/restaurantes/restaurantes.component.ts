import { Component, OnInit } from "@angular/core";
import { Oferta } from "../../components/shared/oferta.model";
import { OfertasService } from "../../ofertas.service";

@Component({
  selector: "app-restaurantes",
  templateUrl: "./restaurantes.component.html",
  styleUrls: ["./restaurantes.component.css"],
  providers: [OfertasService],
})
export class RestaurantesComponent implements OnInit {
  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertasService
      .getOfertasPorCategoria("restaurante")
      .then((ofertas: Array<Oferta>) => console.log(ofertas));
  }
}
