import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NovaAdmissaoComponent } from './nova-admissao/nova-admissao.component';


const routes: Routes = [
    { path: 'admissao', component: NovaAdmissaoComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class CooperadoRoutingModule { }