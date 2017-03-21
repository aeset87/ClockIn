import { Component, OnInit } from '@angular/core';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';
import { EmployeeService } from './employee.service';
import { EmployeeLog } from './employee-log';
import { EMPLOYEELOG } from './mock-employees-log';

@Component({
  selector: 'my-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent
{
     employees: Employee[];
     employeeslog = EMPLOYEELOG;
}