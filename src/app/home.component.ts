import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
     employees: Employee[];
     constructor(private employeeService: EmployeeService) {}
     ngOnInit(): void 
     {
            this.employeeService.getEmployees()
            .then(employees => this.employees = employees.slice(1, 5));
     }
}

