import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import {Employee} from './../Employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  arrayEmployee : Employee [];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.arrayEmployee = this.employeeService.getEmployees();
  }

  

}
