import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TaskboardComponent }  from './taskboard.component';

const routes: Routes = [
  { path: '', redirectTo: '/taskboard', pathMatch: 'full' },
  { path: 'taskboard',     component: TaskboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
