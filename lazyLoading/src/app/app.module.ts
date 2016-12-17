import { AppRoutingModule } from './app-routing.module';
import { NewsModule } from './news/news.module';
// import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
// import { NewsComponent } from './news/news.component';
// // import { AboutComponent } from './about/about.component';
// import { HomeComponent } from './home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HomeModule,
    // AboutModule,
    NewsModule,
    AppRoutingModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
