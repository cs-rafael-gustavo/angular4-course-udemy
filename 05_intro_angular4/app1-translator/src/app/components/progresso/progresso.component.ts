import { Component, OnInit, Input, OnChanges } from "@angular/core";

@Component({
  selector: "app-progresso",
  templateUrl: "./progresso.component.html",
  styleUrls: ["./progresso.component.css"],
})
export class ProgressoComponent implements OnInit, OnChanges {
  @Input() public progresso: number = 0;
  public width: string;

  constructor() {}

  ngOnInit(): void {}

  ngOnChanges(data) {
    this.progresso = data.progresso.currentValue;
    this.width = `${this.progresso}%`;
  }
}
