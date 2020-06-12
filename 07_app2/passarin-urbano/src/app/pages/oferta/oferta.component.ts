import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OfertasService } from "../../ofertas.service";
import { Oferta } from "./../../components/shared/oferta.model";
import { Observable, Observer } from "rxjs";
import { interval } from "rxjs";

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

    // this.route.params.subscribe(
    //   (params: any) => {
    //     console.log(params);
    //   },
    //   (err: any) => {
    //     console.log(err);
    //   },
    //   () => console.log("Processamento classificado como concluído")
    // );

    // let tempo = interval(1000);
    // tempo.subscribe((interval: number) => {
    //   console.log(interval);
    // });

    // observable (observável)
    let meuObservableTeste = Observable.create((observer: Observer<number>) => {
      observer.next(1);
      observer.next(2);
    });

    // observer (observador)
    meuObservableTeste.subscribe((res: number) => console.log(res + 10));
  }
}
