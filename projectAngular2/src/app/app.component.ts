import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>Project Angular 2</h1>
    <nav>
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/courses" routerLinkActive="active">Courses</a>
      <a routerLink="/teacher" routerLinkActive="active">Teacher</a>
    </nav>
   <router-outlet></router-outlet>  
  `
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
})
export class AppComponent {
  
}
