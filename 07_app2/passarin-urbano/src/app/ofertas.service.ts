import { HttpClient } from "@angular/common/http";
import { Oferta } from "./components/shared/oferta.model";
import { Injectable } from "@angular/core";
import { URL_API } from "./app.api";

@Injectable()
export class OfertasService {
  private serviceRoute: string = "ofertas";

  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Array<Oferta>> {
    return this.http
      .get(`${URL_API}${this.serviceRoute}?destaque=true`)
      .toPromise()
      .then((res: any) => res);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
    return this.http
      .get(`${URL_API}${this.serviceRoute}?categoria=${categoria}`)
      .toPromise()
      .then((res: any) => res);
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http
      .get(`${URL_API}${this.serviceRoute}?id=${id}`)
      .toPromise()
      .then((res: any) => res.shift());
  }
}
