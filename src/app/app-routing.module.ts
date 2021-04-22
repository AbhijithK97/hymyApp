
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{LoginBoxComponent} from "./login-box/login-box.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
