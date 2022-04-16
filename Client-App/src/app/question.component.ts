import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";
import { ApiServices } from "./api.services";
import { Question } from "./share";
@Component({
    selector:'question',
    templateUrl:'./question.component.html'
})
export class QuestionComponent{
    constructor(private apiSvc:ApiServices,private route:ActivatedRoute){}
    quizId:number = NaN;
    question = new Question();
    subscription = new Subscription();
    ngOnInit(){
        console.log('yuklanmoqda',this.question)
        this.quizId = Number(this.route.snapshot.paramMap.get('quizId'));
        this.subscription = this.apiSvc.getSelectedQuestion().subscribe(q=>{
             this.question = q
         })
    }
    ngOnDestroy(){
        this.subscription.unsubscribe();
    }
    post(){
        console.log('jonatilmoqda',this.question)
        this.question.quizID = this.quizId;
        if(!this.question.id)
            this.apiSvc.postQuestion(this.question);
        else
            this.apiSvc.putQuestion(this.question)
        this.yangilash();
    }
    yangilash(){
        this.question = new Question();
    }
}