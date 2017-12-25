import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {QuestionService} from "../../services/question.service";
import {Quiz} from "../../model/quiz";

@Component({
    selector: 'app-review-quiz',
    templateUrl: './review-quiz.component.html',
    styleUrls: ['./review-quiz.component.css']
})
export class ReviewQuizComponent implements OnInit {

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
