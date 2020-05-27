import { Component, OnInit, EventEmitter, Output } from "@angular/core";

import { Frase } from "../../shared/frase.model";
import { FRASES } from "./frases-mock";

@Component({
  selector: "app-painel",
  templateUrl: "./painel.component.html",
  styleUrls: ["./painel.component.css"],
})
export class PainelComponent implements OnInit {
  public instrucao: string = "Traduza a frase:";
  public frases: Frase[] = FRASES;
  public resposta: string = "";
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;
  public tentativas: number = 3;
  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  ngOnInit(): void {}

  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta() {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      this.rodada++;
      this.progresso = this.progresso + 100 / this.frases.length;
      if (this.rodada === this.frases.length) {
        this.encerrarJogo.emit("vitoria");
      }
      this.atualizaRodada();
    } else {
      alert("A tradução está errada");
      this.tentativas--;

      if (this.tentativas === -1) {
        this.encerrarJogo.emit("derrota");
      }
    }
  }

  public atualizaRodada(): void {
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = "";
  }
}
