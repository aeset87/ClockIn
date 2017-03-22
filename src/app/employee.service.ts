import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import { Router } from '@angular/router';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';

@Injectable()
export class EmployeeService
{
    constructor(private http: Http, private router: Router) { }

    getEmployees() : Promise<Employee[]>
    {
        return Promise.resolve(EMPLOYEES);
    }

    getAllEmployees() {
      return this.http.get('http://localhost:3000/api/v1/employees')
        .map(res => res.json());
    }

    createEmployee(employee: Employee) {
      this.http
        .post('http://localhost:3000/api/v1/employees', employee)
          .subscribe(data => {
                alert('ok');
          }, error => {
              console.log(error.json());
          });
    }

    saveEmployee(employee: Employee) {
      console.log(employee);

      this.http
        .patch('http://localhost:3000/api/v1/employees/' + employee.id, employee)
          .subscribe(data => {
              this.router.navigate(['/employees']);
          }, error => {
              console.log(error.json());
          });
    }

    getEmployee(id: number) {
      return this.http.get('http://localhost:3000/api/v1/employees/' + id)
        .map(res => res.json());
    }

    /*getEmployee(id: number): Promise<Employee>
    {
        return this.getEmployees()
                    .then(employee => employee.find(employee => employee.id === id));
    }*/

     searchEmployees(term : string) : Promise<Employee[]>{
         return this.getEmployees()
         .then(employee => employee);
     }
}
