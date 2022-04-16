import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { PlayQuizComponent } from './play-quiz/play-quiz.component';
import { PlayComponent } from './play/play.component';
import { QuestionComponent } from './question.component';
import { QuestionsComponent } from './questions/questions.component'
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'question/:quizId',component:QuestionComponent},
  {path:'question',component:QuestionComponent},
  {path:'questions',component:QuestionsComponent},
  {path:'quiz',component:QuizComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'play',component:PlayComponent},
  {path:'playQuiz/:quizId',component:PlayQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
