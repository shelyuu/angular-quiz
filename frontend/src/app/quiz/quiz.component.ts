import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent extends AppComponent implements OnInit {
  quizControl: FormControl = new FormControl();
  randomQuestion: string;
  questions: string[] = [
    'What is the capital city of Australia?',
    'Who painted the famous Mona Lisa portrait?',
    'Which animal is known as the "king of the jungle"?',
    // Add more questions as needed
  ];
  
  onAddQuiz() {
    const question = this.quizControl.value;
    console.log(question);
  }

  constructor() {
    super();
    
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.randomQuestion = this.questions[randomIndex];
  }

  ngOnInit(): void {
  }

}