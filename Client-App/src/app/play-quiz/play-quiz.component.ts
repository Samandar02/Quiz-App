import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from '../api.services';
import { Question } from '../share';

@Component({
  selector: 'app-play-quiz',
  templateUrl: './play-quiz.component.html',
  styleUrls: ['./play-quiz.component.css']
})
export class PlayQuizComponent implements OnInit {

  constructor(private apiSvc: ApiServices, private route: ActivatedRoute) { }
  questions: Question[] = [];
  quizId: number = -1;
  ngOnInit(): void {
    this.quizId = Number(this.route.snapshot.paramMap.get('quizId'))
    this.apiSvc.getQuestions(this.quizId).subscribe(response => {
      this.questions = <Question[]>response;
      this.questions.forEach(q => { 
        q.answers = this.shuffleArray([q.correctAnswer, q.wrongAnswer1, q.wrongAnswer2, q.wrongAnswer3])
      })
    })
  }
  shuffleArray(array:any){
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
      return array;
    }
  }

}
