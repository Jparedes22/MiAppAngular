import { AsignaturasComponent } from './components/asignaturas/asignaturas.component';
import { CiclosComponent } from './components/ciclos/ciclos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetallesCiclosComponent } from './components/detalles-ciclos/detalles-ciclos.component';


const routes: Routes = [
{path:"home", component:HomeComponent},
{path:"ciclos", component:CiclosComponent},
{path:"asignaturas", component:AsignaturasComponent},
{path:"ciclosDetalles/:curso/:nombre", component: DetallesCiclosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
