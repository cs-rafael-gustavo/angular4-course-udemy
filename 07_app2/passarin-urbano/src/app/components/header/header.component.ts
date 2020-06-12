import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public pesquisa(termoDaPesquisa: string): void {
    console.log(termoDaPesquisa);
  }
}
