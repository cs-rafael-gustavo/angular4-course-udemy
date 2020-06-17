import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

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

import localePt from "@angular/common/locales/pt";
import { registerLocaleData } from "@angular/common";

import { DescricaoReduzida } from "./utils/descricao-reduzida.pipe";
import { OrdemCompraComponent } from './pages/ordem-compra/ordem-compra.component';

registerLocaleData(localePt, "pt");

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
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [{ provide: LOCALE_ID, useValue: "pt" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
