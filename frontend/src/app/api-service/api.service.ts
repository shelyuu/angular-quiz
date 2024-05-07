import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiService {
	constructor(private http: HttpClient) { }

	postQuestion(question: any) {
		// Add your API call here
		this.http.post('https://localhost:7232/api/quiz', question).subscribe(
		(response) => {
		// Handle the response here
		console.log(response);
		},
		(error) => {
		// Handle the error here
		console.error(error);
		}
		);
	}
}