import { Component, OnInit } from "@angular/core";
import { OfertasService } from "../../ofertas.service";
import { Oferta } from "../shared/oferta.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  providers: [OfertasService],
})
export class HeaderComponent implements OnInit {
  public ofertas: Observable<Oferta[]>;

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {}

  public pesquisa(termoDaPesquisa: string): void {
    this.ofertas = this.ofertasService.pesquisaOfertas(termoDaPesquisa);

    this.ofertas.subscribe(
      (ofertas: Oferta[]) => console.log(ofertas),
      (err: any) => console.log("Erro Status: ", err.status),
      () => console.log("Fluxo de Eventos Completo!")
    );
  }
}
