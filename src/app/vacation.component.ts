import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { EmployeeService } from './employee.service';
import { EmployeeLog } from './employee-log';
import { EMPLOYEELOG } from './mock-employees-log';

@Component({
  selector: 'my-vacation',
  templateUrl: './vacation.component.html',
  styleUrls: ['./vacation.component.css']
})
export class VacationComponent
{
     employees: Employee[];
     employeeslog = EMPLOYEELOG;
}