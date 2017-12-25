import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {GenerateQuizComponent} from './components/generate-quiz/generate-quiz.component';
import {ReviewQuizComponent} from './components/review-quiz/review-quiz.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {appRoutes} from "./routing";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import { NavComponent } from './components/nav/nav.component';
import { TakeQuizComponent } from './components/take-quiz/take-quiz.component';
import {QuestionService} from "./services/question.service";
import { NewQuestionComponent } from './components/new-question/new-question.component';
import { PageDneComponent } from './components/page-dne/page-dne.component';


@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        GenerateQuizComponent,
        ReviewQuizComponent,
        TakeQuizComponent,
        NewQuestionComponent,
        PageDneComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes),
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        QuestionService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
