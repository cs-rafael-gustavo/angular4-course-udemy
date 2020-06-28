import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AcessoComponent } from "./pages/acesso/acesso.component";
import { HomeComponent } from "./pages/home/home.component";
import { AutenticacaoGuard } from "./service/autenticacao/autenticacao-guard.service";

const routes: Routes = [
  { path: "", component: AcessoComponent },
  { path: "home", component: HomeComponent, canActivate: [AutenticacaoGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
