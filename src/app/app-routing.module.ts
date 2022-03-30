import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AuthorizationsComponent} from "./authorizations/authorizations.component";
import {OperationsComponent} from "./operations/operations.component";
import {ResponsesComponent} from "./responses/responses.component";
import {ErrorPageComponent} from "./error-page/error-page.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'authorizations', component: AuthorizationsComponent},
  {path: 'operations', component: OperationsComponent},
  {path: 'responses', component: ResponsesComponent},
  {path: 'error', component: ErrorPageComponent},
  {path: '**', redirectTo: '/error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
