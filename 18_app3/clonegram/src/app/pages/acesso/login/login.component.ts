import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

import { Autenticacao } from "../../../service/autenticacao/autenticacao.service";
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
  state,
} from "@angular/animations";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  @Output() public exibirPainel: EventEmitter<string> = new EventEmitter<
    string
  >();

  public formulario: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    senha: new FormControl(null, [Validators.minLength(6)]),
  });

  public mensagemErro: string = "";

  constructor(private autenticacao: Autenticacao) {}

  ngOnInit(): void {}

  public exibirPainelCadastro(): void {
    this.exibirPainel.emit("cadastro");
  }

  public autenticar(): void {
    this.autenticacao
      .autenticar(this.formulario.value.email, this.formulario.value.senha)
      .then((res: any) => {
        if (res !== undefined) {
          this.mensagemErro = res;
        }
      });
  }
}
