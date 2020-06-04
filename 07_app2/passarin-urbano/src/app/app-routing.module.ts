import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { RestaurantesComponent } from "./pages/restaurantes/restaurantes.component";
import { DiversaoComponent } from "./pages/diversao/diversao.component";
import { OfertaComponent } from "./pages/oferta/oferta.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "restaurantes", component: RestaurantesComponent },
  { path: "diversao", component: DiversaoComponent },
  { path: "oferta", component: OfertaComponent },
  { path: "oferta/:id", component: OfertaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
