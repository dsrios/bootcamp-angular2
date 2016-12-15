import { TeacherComponent } from './teacher/teacher.component';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const appRoutes : Routes = [
    {path : 'home', component: HomeComponent},
    {path : 'courses', component: CoursesComponent},
    {path : 'teacher', component:TeacherComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],
    exports:[
        RouterModule
    ]
})

export class AppRoutingModule{}

