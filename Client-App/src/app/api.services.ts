import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { Question, Quiz } from "./share";

@Injectable()
export class ApiServices{
    constructor(private http:HttpClient){}
    private SelectedQuestion = new Subject<Question>();
    private SelectedQuiz = new Subject<Quiz>();
    private NewQuiz = new Subject<Quiz>();
    private NewQuestion = new Subject<Question>();

selectedQuestion(question:Question){
    this.SelectedQuestion.next(question);
}
selectedQuiz(quiz:Quiz){
    this.SelectedQuiz.next(quiz);
}
getSelectedQuestion(){
    return this.SelectedQuestion.asObservable();
}
getSelectedQuiz(){
    return this.SelectedQuiz.asObservable();
}
newQuiz(quiz:Quiz){
   this.NewQuiz.next(quiz);
}
getNewQuiz(){
    return this.NewQuiz.asObservable();
}
newQuestion(question:Question){
    this.NewQuestion.next(question);
 }
 getNewQuestion(){
     return this.NewQuestion.asObservable();
 }

    url1 = 'https://localhost:44342/api/question/'; 
    url2 = 'https://localhost:44342/api/quizzes/'; 
    
    getQuestions(quizId:number){
        return this.http.get(this.url1+quizId);
    }
    postQuestion(question:Question){
        this.http.post(this.url1,question)
        .subscribe(response=>{
            this.NewQuestion.next(response as Question)
        })
    }
    putQuestion(question:Question){
        this.http.put(this.url1+question.id,question)
        .subscribe(response=>{
            console.log(response);
        })
    }
    getAllQuiz(){
        return this.http.get(this.url2+'all');
    }
    getQuiz(){
        return this.http.get(this.url2);
    }
    postQuiz(quiz:Quiz){
        this.http.post(this.url2,quiz)
        .subscribe(response=>{
           this.newQuiz(response as Quiz);
        })
    }
    putQuiz(quiz:Quiz){
        this.http.put(this.url2+quiz.id,quiz)
        .subscribe(response=>{
            console.log(response);
        })
    }
}