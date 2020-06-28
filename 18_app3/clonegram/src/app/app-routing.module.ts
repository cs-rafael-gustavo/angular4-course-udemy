import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AcessoComponent } from "./pages/acesso/acesso.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: "", component: AcessoComponent },
  { path: "home", component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
