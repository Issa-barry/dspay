import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoubdComponent } from './page-not-foubd/page-not-foubd.component';

const routes: Routes = [
  {path: 'dashboard', children: [{ path: '', component:DashboardComponent }]},
  {path:'**', component:PageNotFoubdComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
