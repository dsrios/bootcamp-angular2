import { EmployeeComponent } from './employee/employee.component';
import { Employee } from './employee';
import { Injectable } from '@angular/core';



@Injectable()
export class EmployeeService {

  employees : Employee[] = [
    new Employee(123, 'Diego', 'Developer', '25'),
    new Employee(456, 'Juan', 'Futbolista','30'),
    new Employee(789, 'Felipe', 'Mecanico', '27'),
    new Employee(120, 'Andres', 'Vigilante', '39'),
    new Employee(345, 'Byron', 'Administrador', '48'),
    new Employee(678, 'Hugo', 'Vendedor', '35'),
    new Employee(901, 'Julian', 'Estudiante', '18'),
    new Employee(234, 'Maria', 'Diseñadora', '25')
  ]
  
  constructor() { 
    
  }

  getEmployees():Employee[]{
    return this.employees;
  }

  getEmployee(id:number):Employee{
    return this.employees.find((employee:Employee)=> 
    employee.id === id);

  }

  
}
