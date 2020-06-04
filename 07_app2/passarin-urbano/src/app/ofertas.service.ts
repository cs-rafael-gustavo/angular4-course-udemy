import { HttpClient } from "@angular/common/http";
import { Oferta } from "./components/shared/oferta.model";
import { Injectable } from "@angular/core";
// import "rxjs/operator/toPromise";

@Injectable()
export class OfertasService {
  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Array<Oferta>> {
    return this.http
      .get("http://localhost:3000/ofertas?destaque=true")
      .toPromise()
      .then((res: any) => res);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
    return this.http
      .get(`http://localhost:3000/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((res: any) => res);
  }
}
