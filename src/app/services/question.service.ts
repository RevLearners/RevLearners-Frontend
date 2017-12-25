import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/observable/empty";
import 'rxjs/add/operator/map'

import {HttpClient} from "@angular/common/http";

import {Question} from "../model/question";
import {Quiz} from "../model/quiz";
import {QuestionOption} from "../model/question-option";
import {Topic} from "../model/topic";
import {Injectable} from "@angular/core";


const TOPICS: Topic[] = [
    new Topic(-1, "Hibernate"),
    new Topic(-1, "Core Java"),
    new Topic(-1, "Design Patterns"),
    new Topic(-1, "Html/CSS/Javascript")
];

const QUIZ: Quiz = new Quiz(
    1,
    null,
    [
        new Question(
            1,
            "a this is a question this is a question this is a question this is a question this is a question this is a question, deal with it ",
            "the correct answer is whatever i say it is the correct answer is whatever i say it is the correct answer is whatever i say it is",
            [
                new QuestionOption(
                    1,
                    "this is an option; deal with it",
                    false
                ),
                new QuestionOption(
                    2,
                    "this is an option; deal with it",
                    true
                ),
                new QuestionOption(
                    3,
                    "this is an option; deal with it",
                    false
                ),
            ]
        ),
        new Question(
            1,
            "b this is a question this is a question this is a question this is a question this is a question this is a question, deal with it ",
            "the correct answer is whatever i say it is the correct answer is whatever i say it is the correct answer is whatever i say it is",
            [
                new QuestionOption(
                    1,
                    "this is an option; deal with it",
                    false
                ),
                new QuestionOption(
                    2,
                    "this is an option; deal with it",
                    true
                ),
                new QuestionOption(
                    3,
                    "this is an option; deal with it",
                    false
                ),
            ]
        ),

        new Question(
            1,
            "c this is a question this is a question this is a question this is a question this is a question this is a question, deal with it ",
            "the correct answer is whatever i say it is the correct answer is whatever i say it is the correct answer is whatever i say it is",
            [
                new QuestionOption(
                    1,
                    "this is an option; deal with it",
                    false
                ),
                new QuestionOption(
                    2,
                    "this is an option; deal with it",
                    true
                ),
                new QuestionOption(
                    3,
                    "this is an option; deal with it",
                    false
                ),
            ]
        ),

        new Question(
            1,
            "c this is a question this is a question this is a question this is a question this is a question this is a question, deal with it ",
            "the correct answer is whatever i say it is the correct answer is whatever i say it is the correct answer is whatever i say it is",
            [
                new QuestionOption(
                    1,
                    "this is an option; deal with it",
                    false
                ),
                new QuestionOption(
                    2,
                    "this is an option; deal with it",
                    true
                ),
                new QuestionOption(
                    3,
                    "this is an option; deal with it",
                    false
                ),
            ]
        ),

        new Question(
            1,
            "d this is a question this is a question this is a question this is a question this is a question this is a question, deal with it ",
            "the correct answer is whatever i say it is the correct answer is whatever i say it is the correct answer is whatever i say it is",
            [
                new QuestionOption(
                    1,
                    "this is an option; deal with it",
                    false
                ),
                new QuestionOption(
                    2,
                    "this is an option; deal with it",
                    true
                ),
                new QuestionOption(
                    3,
                    "this is an option; deal with it",
                    false
                ),
            ]
        )

    ]
);

@Injectable()
export class QuestionService {

    topics: Topic[] = null;

    constructor(private http: HttpClient) {
    }

    public generateQuizByTopic(topic: Topic): Observable<Quiz> {
        return Observable.of(QUIZ);
    }

    public getQuizById(id: number): Observable<Quiz> {
        return Observable.of(QUIZ);
    }

    public submitQuizAttempt(completedQuiz: Quiz): Observable<Quiz> {
        return Observable.of(QUIZ);
    }

    public submitNewQuestion(newQuestion: Question): Observable<any> {
        return Observable.empty();
    }

    public getAllTopics(): Observable<Topic[]> {
        if (this.topics != null)
            return Observable.of(this.topics);

        else
            return Observable.of(TOPICS)    // todo: replace with http call
                .map(data => {
                        this.topics = TOPICS;   // assign once and never make http call again
                        return data
                    }
                );
    }
}
