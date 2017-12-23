import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GenerateQuizComponent } from './components/generate-quiz/generate-quiz.component';
import { ReviewQuizComponent } from './components/review-quiz/review-quiz.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GenerateQuizComponent,
    ReviewQuizComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
