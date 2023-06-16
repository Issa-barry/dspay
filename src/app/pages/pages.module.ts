import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoubdComponent } from './page-not-foubd/page-not-foubd.component';


@NgModule({
  declarations: [
    DashboardComponent,
    PageNotFoubdComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
}) 
export class PagesModule { }
