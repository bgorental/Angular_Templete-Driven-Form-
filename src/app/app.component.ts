import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formInputs') signUpForm : NgForm;
  defaultQuesAns = 'pet';
  defaultEmail = "Please Enter your e-mail";
  answer = "";

  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  onSubmitted(){
    console.log(this.signUpForm);
  }
}
