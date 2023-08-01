import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './componentes/login/login.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ProductosComponent } from './modules/productos/productos.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ButtonComponent } from './shared/componentes/button/button.component';
import { FooterComponent } from './shared/componentes/footer/footer.component';
import { NosotrosComponent } from './modules/nosotros/nosotros.component';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    ProductosComponent,
    RegistroComponent,
    ButtonComponent,
    FooterComponent,
    NosotrosComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
