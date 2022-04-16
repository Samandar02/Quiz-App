import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../api.services';
import { Quiz } from '../share';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  constructor(private apiSvc:ApiServices) { }
  quizzes:Quiz[] = []
  ngOnInit(): void {
    this.apiSvc.getAllQuiz().subscribe(response=>{
      this.quizzes = <Quiz[]>response;
    })
  }

}
