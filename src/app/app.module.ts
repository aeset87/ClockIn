import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// Imports for loading & configuring the in-memory web api

import { AppComponent } from './app.component';
import { Employee } from './employee';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeeService } from './employee.service';
import { EmployeeComponent } from './employee.component';
import { HomeComponent } from './home.component';
import { AppRoutingModule } from './app-routing.module';
import { LogComponent } from './log.component';
import { VacationComponent } from './vacation.component';

@NgModule
({
   imports:
    [
      BrowserModule,
      FormsModule,
      HttpModule,
      AppRoutingModule
     ],
    declarations:
    [
      AppComponent,
      EmployeeDetailComponent,
      EmployeeComponent,
      HomeComponent,
      LogComponent,
      VacationComponent
    ],
    providers:
    [
      EmployeeService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
