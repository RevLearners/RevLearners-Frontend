import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {TakeQuizComponent} from "./components/take-quiz/take-quiz.component";
import {NewQuestionComponent} from "./components/new-question/new-question.component";
import {ReviewQuizComponent} from "./components/review-quiz/review-quiz.component";
import {PageDneComponent} from "./components/page-dne/page-dne.component";
import {GenerateQuizComponent} from "./components/generate-quiz/generate-quiz.component";

export const appRoutes: Routes = [
    {
        path: 'takeQuiz/:id',
        component: TakeQuizComponent
    },

    {
        path: 'reviewQuiz/:id',
        component: ReviewQuizComponent
    },

    {
        path: 'generateQuiz',
        component: GenerateQuizComponent
    },

    {
        path: 'newQuestion',
        component: NewQuestionComponent
    },

    {
        path: 'home',
        component: HomeComponent
    },

    {
        path: '**',
        component: PageDneComponent
    }
];
