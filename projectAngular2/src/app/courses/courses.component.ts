import { CoursesService } from './../courses.service';
import { NowComponent } from './now/now.component';
import { Component, OnInit } from '@angular/core';
import {Courses} from './../courses';
import { ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
  
})
export class CoursesComponent implements OnInit {
  courses:Courses;

  constructor(private coursesService:CoursesService) { }

  ngOnInit() {
  }


  

}

