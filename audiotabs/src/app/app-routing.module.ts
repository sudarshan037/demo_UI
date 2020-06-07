import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IndianhindiComponent} from './indianhindi/indianhindi.component';
import {IndianenglishComponent} from './indianenglish/indianenglish.component';
import {PreUploadedComponent} from './pre-uploaded/pre-uploaded.component';

const routes: Routes = [
{path: '', redirectTo: '/indianhindi', pathMatch: 'full'},
{path: 'indianhindi', component: IndianhindiComponent},
{path: 'indianenglish', component: IndianenglishComponent},
{path: 'preUpload', component: PreUploadedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
