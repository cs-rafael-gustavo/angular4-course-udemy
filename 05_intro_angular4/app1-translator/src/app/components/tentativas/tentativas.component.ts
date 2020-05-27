import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Coracao } from "../../shared/coracao.model";

@Component({
  selector: "app-tentativas",
  templateUrl: "./tentativas.component.html",
  styleUrls: ["./tentativas.component.css"],
})
export class TentativasComponent implements OnInit, OnChanges {
  @Input() public tentativas: number;

  public coracoes: Array<Coracao> = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true),
  ];

  constructor() {
    console.log(this.coracoes);
  }

  ngOnChanges(): void {
    console.log(`Tentativas recebidas do Painel: ${this.tentativas}`);
  }

  ngOnInit(): void {}
}
