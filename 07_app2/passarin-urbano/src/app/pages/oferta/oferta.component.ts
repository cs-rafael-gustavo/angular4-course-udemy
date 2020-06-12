import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { OfertasService } from "../../ofertas.service";
import { Oferta } from "./../../components/shared/oferta.model";
import { Observable, Observer, Subscription } from "rxjs";
import { interval } from "rxjs";

@Component({
  selector: "app-oferta",
  templateUrl: "./oferta.component.html",
  styleUrls: ["./oferta.component.css"],
  providers: [OfertasService],
})
export class OfertaComponent implements OnInit, OnDestroy {
  private tempoObservableSubscription: Subscription;
  private meuObservableTesteSubscription: Subscription;

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

    let tempo = interval(1000);
    this.tempoObservableSubscription = tempo.subscribe((interval: number) => {
      console.log(interval);
    });

    // observable (observável)
    let meuObservableTeste = Observable.create((observer: Observer<number>) => {
      observer.next(1);
      observer.next(2);
      // observer.error("Algum erro foi encontrado na stream de eventos");
      observer.complete();
      observer.next(3);
    });

    // observer (observador)
    this.meuObservableTesteSubscription = meuObservableTeste.subscribe(
      (res: number) => console.log(res + 10),
      (err: string) => console.log(err),
      () => console.log("Stream de eventos foi finalizada")
    );
  }

  ngOnDestroy(): void {
    this.tempoObservableSubscription.unsubscribe();
    this.meuObservableTesteSubscription.unsubscribe();
  }
}
