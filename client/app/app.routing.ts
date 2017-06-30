// import { NgModule }             from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AppComponent }   from './app.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

// import {InstructionComponent } from './instruction/instruction.component'

// const appRoutes: Routes = [
//     { path: 'instruction', component: InstructionComponent },
//     { path: '', component: DashboardComponent }
// ];

// @NgModule( {
//     imports: [
//         RouterModule.forRoot( appRoutes )
//     ],
//     exports: [
//         RouterModule
//     ]
// })
// export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ChatboardComponent } from './components/chatboard/chatboard.component';

const appRoutes: Routes = [
  /*{ path: '', component: LoginComponent },
  { path: 'chatboard', component: ChatboardComponent }*/
  { path: '', component: ChatboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot( appRoutes, { useHash: true } )], //useHash to have #
  exports: [RouterModule],
})
export class AppRoutingModule { }

// export const routedComponents = [NameComponent];