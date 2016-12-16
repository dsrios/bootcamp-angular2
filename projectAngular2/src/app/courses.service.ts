import { TeacherComponent } from './teacher/teacher.component';
import { CoursesComponent } from './courses/courses.component';
import {Injectable} from '@angular/core';
import {Courses} from './Courses';

@Injectable()

export class CoursesService{

courses : Courses[] = [
  new Courses("Angular2", 32, "1/1/2017"),
  new Courses("Ionic2", 20, "1/12/2016"),
  new Courses("Test automation", 30, "15/5/2016"),
  new Courses("Machine learning", 45, "1/5/2017")
]

constructor(){}

getCourses():Courses[]{
    return this.courses;
}

// getCourse(name:string):Courses{
//     return this.courses.find((courses:Courses)=> 
//     courses.name === name);
// }

}