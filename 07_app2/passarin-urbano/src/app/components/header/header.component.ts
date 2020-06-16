import { Component, OnInit } from "@angular/core";
import { OfertasService } from "../../ofertas.service";
import { Oferta } from "../shared/oferta.model";
import { Observable, Subject, of } from "rxjs";
import { switchMap, debounceTime, distinctUntilChanged } from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  providers: [OfertasService],
})
export class HeaderComponent implements OnInit {
  public ofertas: Observable<any>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa // Retorno da Oferta[]
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((termo: string) => {
          if (termo.trim() === "") {
            console.log("Não foi feito requisição a API");

            return of<Oferta[]>([]);
          }
          console.log("Requisição Http para API");
          return this.ofertasService.pesquisaOfertas(termo);
        })
      );

    this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
  }

  public pesquisa(termoDaPesquisa: string): void {
    console.log("Keyup character: ", termoDaPesquisa);

    this.subjectPesquisa.next(termoDaPesquisa);
  }
}
