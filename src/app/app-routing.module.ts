import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'Pago', loadChildren: './pago/pago.module#PagoPageModule' },
  { path: 'Cantidad', loadChildren: './cantidad/cantidad.module#CantidadPageModule' },
  { path: 'Graficas', loadChildren: './graficas/graficas.module#GraficasPageModule' },
  { path: 'Donar', loadChildren: './donar/donar.module#DonarPageModule' },
  { path: 'Busqueda', loadChildren: './busqueda/busqueda.module#BusquedaPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
