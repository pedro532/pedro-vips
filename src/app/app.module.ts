import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'
import { environment } from 'src/environments/environment';
import { CartaComponent } from './components/carta/carta.component';
import { CartaAlergeComponent } from './components/carta-alerge/carta-alerge.component';
import { DescuentosComponent } from './components/descuentos/descuentos.component';
import { EntrantesComponent } from './components/carta/entrantes/entrantes.component';
import { PrincipalesComponent } from './components/carta/principales/principales.component';
import { EnsaladasComponent } from './components/carta/ensaladas/ensaladas.component';
import { SandwichesComponent } from './components/carta/sandwiches/sandwiches.component';
import { HamburguesasComponent } from './components/carta/hamburguesas/hamburguesas.component';
import { PostresComponent } from './components/carta/postres/postres.component';
import { BebidasComponent } from './components/carta/bebidas/bebidas.component';
import { GlutenComponent } from './components/carta-alerge/gluten/gluten.component';
import { FrutosComponent } from './components/carta-alerge/frutos/frutos.component';
import { LacteosComponent } from './components/carta-alerge/lacteos/lacteos.component';
import { PescadoComponent } from './components/carta-alerge/pescado/pescado.component';
import { SojaComponent } from './components/carta-alerge/soja/soja.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    RegistrarUsuarioComponent,
    VerificarCorreoComponent,
    RecuperarPasswordComponent,
    SpinnerComponent,
    CartaComponent,
    CartaAlergeComponent,
    DescuentosComponent,
    EntrantesComponent,
    PrincipalesComponent,
    EnsaladasComponent,
    SandwichesComponent,
    HamburguesasComponent,
    PostresComponent,
    BebidasComponent,
    GlutenComponent,
    FrutosComponent,
    LacteosComponent,
    PescadoComponent,
    SojaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
