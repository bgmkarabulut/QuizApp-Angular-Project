import { Component, NgModule } from '@angular/core';

import { Route, Router } from '@angular/router';
 

@Component({

  selector: 'app-root',

  templateUrl: './app.component.html',

 styleUrls: ["./app.component.css"]

})

export class AppComponent {

 

  constructor(private router:Router){

 

  }

 

  title = 'QuizApp';

  quizStarted=false;

  quizCompleted=false;

 

startQuiz(){

  this.quizStarted=true;

  this.router.navigate(['quiz']);

}

 

}