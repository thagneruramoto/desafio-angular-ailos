import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'cooperado', loadChildren: () => import('./cooperado/cooperado.module').then(m => m.CooperadoModule)},
  {path: '**', redirectTo: 'cooperado/admissao'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
