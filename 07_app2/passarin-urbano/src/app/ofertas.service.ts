import { HttpClient, HttpResponse } from "@angular/common/http";
import { Oferta } from "./components/shared/oferta.model";
import { Injectable } from "@angular/core";
import { URL_API } from "./app.api";
import { Observable } from "rxjs";
import { map, retry } from "rxjs/operators";

@Injectable()
export class OfertasService {
  constructor(private http: HttpClient) {}

  public getOfertas(): Promise<Oferta[]> {
    return this.http
      .get(`${URL_API}/ofertas?destaque=true`)
      .toPromise()
      .then((res: Oferta[]) => res);
  }

  public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
    return this.http
      .get(`${URL_API}/ofertas?categoria=${categoria}`)
      .toPromise()
      .then((res: Oferta[]) => res);
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
      .then((res: HttpResponse<String>) => {
        return res[0].descricao;
      });
  }

  public getOndeFicaOfertaPorId(id: number): Promise<string> {
    return this.http
      .get(`${URL_API}/onde-fica?id=${id}`)
      .toPromise()
      .then((res: HttpResponse<String>) => {
        return res[0].descricao;
      });
  }

  public pesquisaOfertas(termo: string): Observable<HttpResponse<Oferta[]>> {
    return this.http
      .get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
      .pipe(
        retry(10),
        map((res: HttpResponse<Oferta[]>) => {
          return res;
        })
      );
  }
}
