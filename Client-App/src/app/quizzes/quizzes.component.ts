import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../api.services';
import { Quiz } from '../share';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrls: ['./quizzes.component.css']
})
export class QuizzesComponent implements OnInit {
  quizzes:Quiz[] = [];
  constructor(private apiSvc:ApiServices) { }

  ngOnInit(): void {
    this.apiSvc.getQuiz().subscribe(response=>{
      this.quizzes = <Quiz[]>response;
    })
    this.apiSvc.getNewQuiz().subscribe(newQuiz=>{
      this.quizzes.push(newQuiz);
    })
  }
  selectedQuiz(quiz:Quiz){
    this.apiSvc.selectedQuiz(quiz)
  }
}
