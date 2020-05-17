<<<<<<< HEAD
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { SigninComponent } from './signin.component';


const routes: Routes = [
    {path: '', component: SigninComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class SigninRoutingModule {}
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SigninComponent } from './signin.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninRoutingModule { }
>>>>>>> 77fa1265ff1f6831a6eef0b7db1bd9c9d98e4aa5
