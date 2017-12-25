import {Component, OnInit} from '@angular/core';
import {QuestionService} from "../../services/question.service";
import {ActivatedRoute} from "@angular/router";
import {Quiz} from "../../model/quiz";

@Component({
    selector: 'app-take-quiz',
    templateUrl: './take-quiz.component.html',
    styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {

    quiz: Quiz;

    constructor(private questionService: QuestionService, private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => {
            console.log(params);
            let id: number = +(params["id"]);
            this.questionService.getQuizById(id).subscribe(
                (quiz: Quiz) => this.quiz = quiz,
                console.log
            );
        });
    }

    ngOnInit() {
    }
}

