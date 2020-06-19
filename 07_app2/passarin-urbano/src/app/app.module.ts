import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localePt, "pt");

import { DescricaoReduzida } from "./utils/descricao-reduzida.pipe";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RestaurantesComponent } from "./pages/restaurantes/restaurantes.component";
import { DiversaoComponent } from "./pages/diversao/diversao.component";
import { OfertaComponent } from "./pages/oferta/oferta.component";
import { ComoUsarComponent } from "./pages/oferta/como-usar/como-usar.component";
import { OndeFicaComponent } from "./pages/oferta/onde-fica/onde-fica.component";

import { OrdemCompraComponent } from "./pages/ordem-compra/ordem-compra.component";
import { OrdemCompraSucessoComponent } from "./pages/ordem-compra/ordem-compra-sucesso/ordem-compra-sucesso.component";
import { CarrinhoCompraComponent } from "./pages/ordem-compra/carrinho-compra/carrinho-compra.component";

import { CarrinhoCompraService } from "./pages/ordem-compra/carrinho-compra/carrinho-compra.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertaComponent,
    ComoUsarComponent,
    OndeFicaComponent,
    DescricaoReduzida,
    OrdemCompraComponent,
    OrdemCompraSucessoComponent,
    CarrinhoCompraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: "pt" }, CarrinhoCompraService],
  bootstrap: [AppComponent],
})
export class AppModule {}
