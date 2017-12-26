import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {CompleteChallengeComponent} from "./components/complete-challenge/complete-challenge.component";
import {NewQuestionComponent} from "./components/new-question/new-question.component";
import {PageDneComponent} from "./components/page-dne/page-dne.component";
import {GenerateChallengeComponent} from "./components/generate-quiz/generate-challenge.component";
import {ReviewChallengeComponent} from "./components/review-quiz/review-challenge.component";

export const appRoutes: Routes = [
    {
        path: 'completeChallenge/:id',
        component: CompleteChallengeComponent
    },

    {
        path: 'reviewChallenge/:id',
        component: ReviewChallengeComponent
    },

    {
        path: 'generateChallenge',
        component: GenerateChallengeComponent
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
