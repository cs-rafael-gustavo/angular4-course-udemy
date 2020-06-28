import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";

import { Autenticacao } from "./service/autenticacao/autenticacao.service";
import { AutenticacaoGuard } from "./service/autenticacao/autenticacao-guard.service";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AcessoComponent } from "./pages/acesso/acesso.component";
import { BannerComponent } from "./pages/acesso/banner/banner.component";
import { LoginComponent } from "./pages/acesso/login/login.component";
import { CadastroComponent } from "./pages/acesso/cadastro/cadastro.component";
import { HomeComponent } from "./pages/home/home.component";
import { PublicacoesComponent } from "./pages/home/publicacoes/publicacoes.component";
import { IncluirPublicacaoComponent } from './pages/home/incluir-publicacao/incluir-publicacao.component';

@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    BannerComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    PublicacoesComponent,
    IncluirPublicacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [Autenticacao, AutenticacaoGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
