import { Component, OnInit } from "@angular/core";
import { OfertasService } from "../../ofertas.service";
import { Oferta } from "../shared/oferta.model";
import { Observable, Subject, of } from "rxjs";
import {
  switchMap,
  debounceTime,
  distinctUntilChanged,
  catchError,
} from "rxjs/operators";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
  providers: [OfertasService],
})
export class HeaderComponent implements OnInit {
  public ofertas: Observable<any>;
  public ofertas2: Oferta[];
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa // Retorno da Oferta[]
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((termo: string) => {
          if (termo.trim() === "") {
            console.log("Não foi feita a requisição a API");

            return of<Oferta[]>([]);
          }
          console.log("Requisição Http para API realizada");
          return this.ofertasService.pesquisaOfertas(termo);
        }),
        catchError((err: any) => {
          console.log(
            "Erro Capturado, sem efeitos colaterais a aplicação",
            err
          );
          return of<Oferta[]>([]);
        })
      );

    this.ofertas.subscribe((ofertas: Oferta[]) => (this.ofertas2 = ofertas));
  }

  public pesquisa(termoDaPesquisa: string): void {
    console.log("Keyup character: ", termoDaPesquisa);

    this.subjectPesquisa.next(termoDaPesquisa);
  }
}
