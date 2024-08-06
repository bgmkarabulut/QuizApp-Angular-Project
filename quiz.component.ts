import { Component, } from '@angular/core';

import { Router } from '@angular/router';

 

@Component({

  selector: 'app-quiz',

  templateUrl: './quiz.component.html',

  styleUrls: ['./quiz.component.css']

})

 

export class QuizComponent{

  constructor(private router:Router){

 

  }

 

activeQuestionId : number = 0;

currentQuestionIndex:number=0;

questions = [

  {

   

    text: "Which SOLID principle states that software entities should be open for extension but closed for modification?",

    options:[

      {text: "Interface Segregation Principle",isCorrect:false,selected:false},

      {text: "Liskov Substitution Principle ",isCorrect:false,selected:false},

      {text: "Single Responsibility Principle ",isCorrect:false,selected:false},

      {text: "Open/Closed Principle ",isCorrect:true,selected:false}

    ],

    answered:false

  },

  {

   

    text: "Which SOLID principle states that a class should have only one reason to change?",

    options:[

      {text:"Single Responsibility Principle ",isCorrect:true,selected:false},

      {text:" Open/Closed Principle ",isCorrect:false,selected:false},

      {text:"Interface Segregation Principle ",isCorrect:false,selected:false},

      {text:"Liskov Substitution Principle ",isCorrect:false,selected:false}

    ],

    answered:false

  },

  {

   

    text: "Which SOLID principle states that a class should have only a limited number of dependencies and that these dependencies should be kept to a minimum?",

    options:[

      {text:"Liskov Substitution Principle ",isCorrect:false,selected:false},

      {text:" Open/Closed Principle ",isCorrect:false,selected:false},

      {text:" Dependency Inversion Principle",isCorrect:true,selected:false},

      {text:" Single Responsibility Principle ",isCorrect:false,selected:false}

    ],

    answered:false

  },

  {

    text: "Which SOLID principle states that a subclass should be substitutable for its base class?",

    options:[

      {text:"Liskov Substitution Principle ",isCorrect:true,selected:false},

      {text:"  Single Responsibility Principle",isCorrect:false,selected:false},

      {text:" Open/Closed Principle",isCorrect:false,selected:false},

      {text:" Interface Segregation Principle",isCorrect:false,selected:false}

    ],

    answered:false

  },

  {

    text: "Dependency Inversion(DIP) advocates for:",

    options:[

      {text:"Modules should depend on each other exactly",isCorrect:false,selected:false},

      {text:"  High-level modules should depend on low-level modules",isCorrect:false,selected:false},

      {text:" Direct coupling between classes and databases",isCorrect:false,selected:false},

      {text:" Modules should depend on abstractions, not on concretions",isCorrect:true,selected:false}

    ],

    answered:false

  },

  {

    text: "LSP ensures that derived classes:",

    options:[

      {text:"Should not extend base classes",isCorrect:false,selected:false},

      {text:"  Can be susbtituted for their classes without altering program correctness",isCorrect:true,selected:false},

      {text:" Must override all methods of base classes",isCorrect:false,selected:false},

      {text:" Are entirely independent of their base classes",isCorrect:false,selected:false}

    ],

    answered:false

  }, {

    text: "ISP focuses on:",

    options:[

      {text:"Including all possible functionality in an interface",isCorrect:false,selected:false},

      {text:" Keeping interfaces small and specific to client needs",isCorrect:true,selected:false},

      {text:" Making interfaces dependent on implementation details",isCorrect:false,selected:false},

      {text:" Using interfaces as base classes",isCorrect:false,selected:false}

    ],

    answered:false

  },

  {

    text: "SOLID principles are typically associated with whic type of programming methodology?",

    options:[

      {text:"Procedural programming ",isCorrect:false,selected:false},

      {text:" Functional programming",isCorrect:false,selected:false},

      {text:"Object-oriented programming(OOP)",isCorrect:true,selected:false},

      {text:" Declarative programming",isCorrect:false,selected:false}

    ],

    answered:false

  },

  {

    text: "SOLID principles are most beneficial for:",

    options:[

      {text:"Small, simple projects ",isCorrect:false,selected:false},

      {text:" Large, complex projects",isCorrect:true,selected:false},

      {text:" Web development only",isCorrect:false,selected:false},

      {text:" Database management only",isCorrect:false,selected:false}

    ],

    answered:false

  },

  {

    text: "Interface Segregation Principle (ISP) suggest that:",

    options:[

      {text:"Interfaces should have as few metods as possible",isCorrect:false,selected:false},

      {text:" Interfaces should not be used in object-oriented programming",isCorrect:false,selected:false},

      {text:" Clients should not be forced to implement interfaces they don't use",isCorrect:true,selected:false},

      {text:" All classes should implement all available interfaces",isCorrect:false,selected:false}

    ],

    answered:false

  }

];

 

 

score:number=0;

quizStarted=false;

quizCompleted=false;

 

 

selectOption(activeQuestionId:number,optionIndex:number){

this.questions[activeQuestionId].options.forEach(option=>{

  option.selected=false;

});

this.questions[activeQuestionId].options[optionIndex].selected=true;

 

this.questions[activeQuestionId].answered=true; //işaretlenmiş mi kontrolü. re-selection yok

 

//correct ve incorrect olmasına göre hesap

if(this.questions[activeQuestionId].options[optionIndex].isCorrect){

  this.score += 10;

}else{

  this.score -= 10;

}

}

 

nextQuestion(){

  this.activeQuestionId++;

  this.currentQuestionIndex++;

  if(this.activeQuestionId>=this.questions.length){

    this.quizCompleted=true;

  }

}

 

finishQuiz(){

  this.quizCompleted=true;

  this.router.navigate(['result'],{state:{score:this.score}});//router ile resul sayfasını bağladım bu fonk çalışınca bu compa gidecek

}

}
