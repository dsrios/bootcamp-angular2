
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';


import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { TeacherComponent } from './teacher/teacher.component';

const appRoutes:Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'courses', component : CoursesComponent},
  { path : 'teacher', component : TeacherComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursesComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
