import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent }            from './home.component';
import { EmployeeComponent }       from './employee.component';
import { EmployeeDetailComponent }  from './employee-detail.component';
import { LogComponent } from './log.component';
import { VacationComponent } from './vacation.component';

const routes: Routes = 
[
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent },
  { path: 'detail/:id', component: EmployeeDetailComponent },
  { path: 'employees',     component: EmployeeComponent },
  { path: 'log', component: LogComponent },
  { path: 'vacation', component: VacationComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
