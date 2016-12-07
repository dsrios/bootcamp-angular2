import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeId;
  employee;

  constructor(private router:ActivatedRoute, private employeeService:EmployeeService) { }//inyeccion de dependencias

  ngOnInit() {
    this.router.params.forEach((params:Params)=> this.employeeId = params["id"]);
    this.employee = this.employeeService.getEmployee(parseInt(this.employeeId));
  }



}
