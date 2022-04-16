import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { QuestionComponent } from './question.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiServices } from './api.services';
import { QuestionsComponent } from './questions/questions.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { RegisterComponent } from './register/register.component';
import { AuthInterceptopService } from './auth-interceptop.service';
import { AuthService } from './auth.service';
import { LoginComponent } from './login/login.component';
import { PlayComponent } from './play/play.component';
import { PlayQuizComponent } from './play-quiz/play-quiz.component';
import { ScoreDialogComponent } from './score-dialog/score-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    QuestionsComponent,
    HomePageComponent,
    NavbarComponent,
    QuizComponent,
    QuizzesComponent,
    RegisterComponent,
    LoginComponent,
    PlayComponent,
    PlayQuizComponent,
    ScoreDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiServices,AuthService,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptopService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
