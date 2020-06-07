import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndianhindiComponent} from './indianhindi/indianhindi.component';
import {IndianenglishComponent} from './indianenglish/indianenglish.component';

const routes: Routes = [
{path: '', redirectTo: '/indianhindi', pathMatch: 'full'},
{path: 'indianhindi', component: IndianhindiComponent},
{path: 'indianenglish', component: IndianenglishComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
