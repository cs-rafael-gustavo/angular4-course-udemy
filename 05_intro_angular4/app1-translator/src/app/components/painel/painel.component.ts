import { Component, OnInit, Input } from "@angular/core";

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
  public resposta: string;
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;

  constructor() {
    this.rodadaFrase = this.frases[this.rodada];
    console.log(this.frases);
  }

  ngOnInit(): void {}

  public atualizarResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
  }

  public verificarResposta() {
    if (this.rodadaFrase.frasePtBr === this.resposta) {
      alert("A tradução está correta");
      this.rodada++;
      this.progresso += 100 / this.frases.length;
      this.rodadaFrase = this.frases[this.rodada];
    } else {
      alert("A tradução está errada");
    }
  }
}
