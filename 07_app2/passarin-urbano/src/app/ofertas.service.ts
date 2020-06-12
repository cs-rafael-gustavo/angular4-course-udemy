import { HttpClient } from "@angular/common/http";
import { Oferta } from "./components/shared/oferta.model";
import { Injectable } from "@angular/core";
import { URL_API } from "./app.api";

@Injectable()
export class OfertasService {
  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Array<Oferta>> {
    return this.http
      .get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((res: any) => res);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Array<Oferta>> {
    return this.http
      .get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((res: any) => res);
  }

  public getOfertaPorId(id: number): Promise<Oferta> {
    return this.http
      .get(`${URL_API}/ofertas?id=${id}`)
      .toPromise()
      .then((res: any) => res.shift());
  }

  public getComoUsarOfertaPorId(id: number): Promise<string> {
    return this.http
      .get(`${URL_API}/como-usar?id=${id}`)
      .toPromise()
      .then((res: any) => {
        return res[0].descricao;
      });
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http
      .get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((res: any) => {
        return res[0].descricao;
      });
  }
}
