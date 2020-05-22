export class Veiculo {
  protected modelo: any;
  protected velocidade: number = 0;

  public acelerar(): void {
    this.velocidade = this.velocidade + 10;
  }

  public parar(): void {
    this.velocidade = 0;
  }

  public velocidadeAtual(): number {
    return this.velocidade;
  }
}
