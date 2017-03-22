import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Employee } from './employee';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EMPLOYEES } from './mock-employees';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-employees',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit
{
  employees = [];
  selectedEmployee: Employee;

  onSelect(employee: Employee): void
  {
    this.selectedEmployee = employee;
  }

  constructor(private employeeService: EmployeeService, private router: Router) {}

  getEmployees(): void
  {
      this.employeeService.getAllEmployees().subscribe(employees => {
        this.employees = employees;
        console.log(this.employees);
      });

      //this.employeeService.getEmployees().then(employees => employees);

  }

  ngOnInit(): void
  {
      this.getEmployees();
  }

  gotoDetail(): void
  {
      this.router.navigate(['/detail', this.selectedEmployee.id]);
  }

  searchEmployees(term: string) :void
  {
      this.employeeService.searchEmployees("brus").then(employees => employees);
  }
}
