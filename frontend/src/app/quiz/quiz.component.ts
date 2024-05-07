import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { FormControl } from '@angular/forms';
import { ApiService } from '../api-service/api.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent extends AppComponent implements OnInit {
  constructor(private api: ApiService) {
    super();
    
    const randomIndex = Math.floor(Math.random() * this.questions.length);
    this.randomQuestion = this.questions[randomIndex];
  }

  quizControl: FormControl = new FormControl();
  randomQuestion: string;
  questions: string[] = [
    'What is the capital city of Australia?',
    'Who painted the famous Mona Lisa portrait?',
    'Which animal is known as the "king of the jungle"?',
    // Add more questions as needed
  ];
  
  onAddQuiz() {
    const question:string = this.quizControl.value;
    const quizJson = {
      "quizText": question
    };
    this.api.postQuestion(quizJson);
  }

  ngOnInit(): void {
  }
}