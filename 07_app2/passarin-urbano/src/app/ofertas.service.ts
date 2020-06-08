import { HttpClient } from "@angular/common/http";
import { Oferta } from "./components/shared/oferta.model";
import { Injectable } from "@angular/core";
import { environment } from "../environments/environment";

@Injectable()
export class OfertasService {
  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Array<Oferta>> {
    return this.http
      .get(`${environment.API_URL}ofertas?destaque=true`)
      .toPromise()
      .then((res: any) => res);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
    return this.http
      .get(`${environment.API_URL}ofertas?categoria=${categoria}`)
      .toPromise()
      .then((res: any) => res);
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http
      .get(`${environment.API_URL}ofertas?id=${id}`)
      .toPromise()
      .then((res: any) => res.shift());
  }
}
