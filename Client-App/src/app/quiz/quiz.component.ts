import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { ApiServices } from '../api.services';
import { AuthService } from '../auth.service';
import { Quiz } from '../share';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  quiz = new Quiz()
  subscription = new Subscription()
  constructor(private apiSvc: ApiServices, private auth: AuthService, private router: Router) { }
  isAuthenticated() {
    return this.auth.isAuthenticated
  }
  ngOnInit() {
    this.subscription = this.apiSvc.getSelectedQuiz().subscribe(q => {
      this.quiz = q
      console.log(this.subscription)
    })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  yangilash() {
    this.quiz = new Quiz()
  }
  navigateToQuestions() {
    this.router.navigate(['/question/' + this.quiz.id]);
  }
  post() {
    console.log(this.quiz)
    if (!this.quiz.id)
      this.apiSvc.postQuiz(this.quiz);
    else
      this.apiSvc.putQuiz(this.quiz)
    this.yangilash()
  }
  postQuiz() {

  }
  putQuiz() {

  }
}
