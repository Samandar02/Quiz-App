import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from '../api.services';
import { Question } from '../share';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  constructor(private apiSvc:ApiServices,private route:ActivatedRoute){}
  questions:Question[] = [];
  selectedQuestion(question:Question){
    this.apiSvc.selectedQuestion(question)
  }
  ngOnInit(): void {
    let quizId = Number(this.route.snapshot.paramMap.get("quizId"));
    this.apiSvc.getQuestions(quizId).subscribe(response=>{
      this.questions = <Question[]>response;
    })
    this.apiSvc.getNewQuestion().subscribe(response=>{
      this.questions.push(response);
    })
  }
}
