// import { AboutModule } from './about/about.module';
// import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './App.component';

const routes: Routes = [
    {path: 'home', component : HomeComponent},
    {path: 'news', component : NewsComponent},
     {path: 'about', loadChildren:'app/about/about.module/#AboutModule'},
     {path: '', redirectTo : 'home', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

// export const routedComponents = [AppComponent];