import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Bd } from "../../../service/bd/bd.service";
import * as firebase from "firebase";
import { Progresso } from "../../../service/progresso/progresso.service";

@Component({
  selector: "app-incluir-publicacao",
  templateUrl: "./incluir-publicacao.component.html",
  styleUrls: ["./incluir-publicacao.component.css"],
})
export class IncluirPublicacaoComponent implements OnInit {
  public email: string;
  private imagem: any;

  public formulario: FormGroup = new FormGroup({
    titulo: new FormControl(null),
  });

  constructor(private bd: Bd, private progresso: Progresso) {}

  ngOnInit(): void {
    firebase.auth().onAuthStateChanged((user) => {
      this.email = user.email;
    });
  }

  public publicar(): void {
    this.bd.publicar({
      email: this.email,
      titulo: this.formulario.value.titulo,
      imagem: this.imagem[0],
    });

    this.progresso;
  }

  public preparaImagemUpload(event: Event): void {
    this.imagem = (<HTMLInputElement>event.target).files;
  }
}
