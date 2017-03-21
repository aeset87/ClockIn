import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';

import { Employee } from './employee';
import { EMPLOYEES } from './mock-employees';

@Injectable()
export class EmployeeService
{
    getEmployees() : Promise<Employee[]>
    {
        return Promise.resolve(EMPLOYEES);
    } 

    getEmployee(id: number): Promise<Employee> 
    {
        return this.getEmployees()
                    .then(employee => employee.find(employee => employee.id === id));
    }

     searchEmployees(term : string) : Promise<Employee[]>{
         return this.getEmployees()
         .then(employee => employee);
     }
}
