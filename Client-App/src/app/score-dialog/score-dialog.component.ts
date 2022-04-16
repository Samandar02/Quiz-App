import { Component, Input, OnInit } from '@angular/core';
import { Question } from '../share';

@Component({
  selector: 'app-score-dialog',
  templateUrl: './score-dialog.component.html',
  styleUrls: ['./score-dialog.component.css']
})
export class ScoreDialogComponent implements OnInit {

  constructor() { }
  @Input() questions:Question[] = [];
  correctAnswer = 0;
  ngOnInit(): void {
  }
  finish(){
    this.questions.forEach(q=>{
      if(q.correctAnswer == q.selectedAnswer)
        this.correctAnswer++;
    })
    // console.log(this.questions,correctAnswer)
  }
}
