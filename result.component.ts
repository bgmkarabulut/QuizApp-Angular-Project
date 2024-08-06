import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

 

@Component({

  selector: 'app-result',

  templateUrl: './result.component.html',

  styleUrls: ['./result.component.css']

})

export class ResultComponent implements OnInit{

 

  activeQuestionId : number = 0;

  currentQuestionIndex:number=0;

  quizStarted=false;

  quizCompleted=false;

  score:number=0;

  showStart=false;

 

 

  constructor(private router:Router){

    const navigation=this.router.getCurrentNavigation();

    if(navigation && navigation.extras && navigation.extras.state){

      this.score=navigation.extras.state['score'];

    }else{

      this.score=0;//default score

    }

   

  }

  ngOnInit(): void {

     

  }

 

 

  restartQuiz(){

    this.quizStarted=false;

    this.quizCompleted=false;

    this.activeQuestionId=0;

    this.score=0;

     /* this.questions.forEach(question=>{

      question.options.forEach(option=>{

        option.selected=false;

      });

    });*/

    this.router.navigate(['/app']);

   

 

   

  }

 

}
