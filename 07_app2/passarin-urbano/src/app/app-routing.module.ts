import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { RestaurantesComponent } from "./pages/restaurantes/restaurantes.component";
import { DiversaoComponent } from "./pages/diversao/diversao.component";
import { OfertaComponent } from "./pages/oferta/oferta.component";
import { OndeFicaComponent } from "./pages/oferta/onde-fica/onde-fica.component";
import { ComoUsarComponent } from "./pages/oferta/como-usar/como-usar.component";
import { OrdemCompraComponent } from "./pages/ordem-compra/ordem-compra.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "restaurantes", component: RestaurantesComponent },
  { path: "diversao", component: DiversaoComponent },
  { path: "oferta", component: OfertaComponent },
  {
    path: "oferta/:id",
    component: OfertaComponent,
    children: [
      { path: "", component: ComoUsarComponent },
      { path: "como-usar", component: ComoUsarComponent },
      { path: "onde-fica", component: OndeFicaComponent },
    ],
  },
  { path: "ordem-compra", component: OrdemCompraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
