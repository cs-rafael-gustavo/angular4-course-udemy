import { Component, OnInit } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from "@angular/animations";
import { Imagem } from "../../../shared/model/imagem.model";

@Component({
  selector: "app-banner",
  templateUrl: "./banner.component.html",
  styleUrls: ["./banner.component.css"],
  animations: [
    trigger("banner", [
      state(
        "escondido",
        style({
          opacity: 0,
        })
      ),
      state(
        "visivel",
        style({
          opacity: 1,
        })
      ),
      transition("escondido <=> visivel", animate("2s ease-in")),
    ]),
  ],
})
export class BannerComponent implements OnInit {
  public estado: string = "escondido";

  public imagens: Imagem[] = [
    { estado: "visivel", url: "/assets/banner-acesso/animations/img_1.png" },
    { estado: "escondido", url: "/assets/banner-acesso/animations/img_2.png" },
    { estado: "escondido", url: "/assets/banner-acesso/animations/img_3.png" },
    { estado: "escondido", url: "/assets/banner-acesso/animations/img_4.png" },
    { estado: "escondido", url: "/assets/banner-acesso/animations/img_5.png" },
  ];

  constructor() {}

  ngOnInit(): void {
    setInterval(() => this.logicaRotacao(), 3000);
  }

  private logicaRotacao(): void {
    let imgAux: number;

    // ocultar imagem
    for (let i = 0; i <= this.imagens.length; i++) {
      if (this.imagens[i].estado === "visivel") {
        this.imagens[i].estado = "escondido";

        imgAux = i === 4 ? 0 : i + 1;
        break;
      }
    }

    // exibir imagem
    this.imagens[imgAux].estado = "visivel";
  }
}
