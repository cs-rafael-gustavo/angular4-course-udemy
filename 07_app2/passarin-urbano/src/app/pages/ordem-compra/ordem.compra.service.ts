import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pedido } from "../../components/shared/pedido.model";
import { URL_API } from "../../app.api";
import { map } from "rxjs/operators";

@Injectable()
export class OrdemCompraService {
  constructor(private http: HttpClient) {}

  public efetivarCompra(pedido: Pedido): Observable<any> {
    return this.http
      .post(`${URL_API}/pedidos`, pedido)
      .pipe(map((res: any) => console.log(res)));
  }
}
