import 'rxjs/add/operator/switchMap';

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Employee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'my-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit
{
    @Input() employee: Employee;

    constructor(private employeeService: EmployeeService, private route: ActivatedRoute, private location: Location) {}

    ngOnInit(): void 
    {
        this.route.params
            .switchMap((params: Params) => this.employeeService.getEmployee(+params['id']))
            .subscribe(employee => this.employee = employee);
    }

    goBack(): void 
    {
        this.location.back();
    }
}

