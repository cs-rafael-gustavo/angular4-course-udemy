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
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa // Retorno da Oferta[]
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((termo: string) => {
          if (termo.trim() === "") {
            return of<Oferta[]>([]);
          }
          return this.ofertasService.pesquisaOfertas(termo);
        }),
        catchError((err: any) => {
          console.log(err);
          return of<Oferta[]>([]);
        })
      );
  }

  public pesquisa(termoDaPesquisa: string): void {
    this.subjectPesquisa.next(termoDaPesquisa);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next("");
  }
}
