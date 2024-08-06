import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';

import { QuizComponent } from './quiz/quiz.component';

import { ResultComponent } from './result/result.component';

 

const routes: Routes = [

  { path: 'quiz', component: QuizComponent },

  {path:'result',component:ResultComponent},

  {path:'app',component:AppComponent}

 

 

];

 

 

@NgModule({

  imports: [

   RouterModule.forRoot(routes)

  ],

  exports:[RouterModule]

})

export class AppRoutingModule { }