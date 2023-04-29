import { CartaComponent } from './components/carta/carta.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarUsuarioComponent } from './components/registrar-usuario/registrar-usuario.component';
import { VerificarCorreoComponent } from './components/verificar-correo/verificar-correo.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CartaAlergeComponent } from './components/carta-alerge/carta-alerge.component';
import { DescuentosComponent } from './components/descuentos/descuentos.component';
import { EntrantesComponent } from './components/carta/entrantes/entrantes.component';
import { EnsaladasComponent } from './components/carta/ensaladas/ensaladas.component';
import { PrincipalesComponent } from './components/carta/principales/principales.component';
import { SandwichesComponent } from './components/carta/sandwiches/sandwiches.component';
import { HamburguesasComponent } from './components/carta/hamburguesas/hamburguesas.component';
import { PostresComponent } from './components/carta/postres/postres.component';
import { BebidasComponent } from './components/carta/bebidas/bebidas.component';
import { GlutenComponent } from './components/carta-alerge/gluten/gluten.component';
import { FrutosComponent } from './components/carta-alerge/frutos/frutos.component';
import { LacteosComponent } from './components/carta-alerge/lacteos/lacteos.component';
import { PescadoComponent } from './components/carta-alerge/pescado/pescado.component';
import { SojaComponent } from './components/carta-alerge/soja/soja.component';

const routes: Routes = [
  { path: '', redirectTo: 'login' , pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registrar-usuario', component: RegistrarUsuarioComponent },
  { path: 'verificar-correo', component: VerificarCorreoComponent },
  { path: 'recuperar-password', component: RecuperarPasswordComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'carta', component: CartaComponent },
  { path: 'carta-alerge', component: CartaAlergeComponent },
  { path: 'descuentos', component: DescuentosComponent },
  { path: 'entrantes', component: EntrantesComponent },
  { path: 'ensaladas', component: EnsaladasComponent },
  { path: 'principales', component: PrincipalesComponent },
  { path: 'sandwiches', component: SandwichesComponent },
  { path: 'hamburguesas', component: HamburguesasComponent },
  { path: 'postres', component: PostresComponent },
  { path: 'bebidas', component: BebidasComponent },
  { path: 'gluten', component: GlutenComponent },
  { path: 'frutos', component: FrutosComponent },
  { path: 'lacteos', component: LacteosComponent },
  { path: 'pescado', component: PescadoComponent },
  { path: 'soja', component: SojaComponent },
  { path: '**', redirectTo: 'login' , pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
