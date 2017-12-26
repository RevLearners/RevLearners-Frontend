import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {appRoutes} from "./routing";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {NavComponent} from './components/nav/nav.component';

import {AppComponent} from './app.component';
import {HomeComponent} from './components/home/home.component';
import {GenerateChallengeComponent} from './components/generate-quiz/generate-challenge.component';
import {ReviewChallengeComponent} from './components/review-quiz/review-challenge.component';
import {CompleteChallengeComponent} from './components/complete-challenge/complete-challenge.component';
import {QuestionService} from "./services/question.service";
import {NewQuestionComponent} from './components/new-question/new-question.component';
import {PageDneComponent} from './components/page-dne/page-dne.component';
import {LoginCredentialsService} from "./services/login-credentials.service";
import {BackendService} from "./services/backend.service";
import {FileService} from "./services/file.service";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        HomeComponent,
        GenerateChallengeComponent,
        ReviewChallengeComponent,
        CompleteChallengeComponent,
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
        QuestionService,
        LoginCredentialsService,
        FileService,
        BackendService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
