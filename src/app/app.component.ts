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

  submitted = false;
  userDetails = {
    username:'',
    email:'',
    secret:'',
    answer:'',
    gender:''
  }

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.signUpForm.setValue({
    //   userData   : {
    //     username : suggestedName,
    //     email    : '',
    //   },
    //   secret     : 'pet',
    //   questAns   : '',
    //   gender     : 'male'
    // })

    this.signUpForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    })
  }

  onSubmitted(){
    // console.log(this.signUpForm);
    this.submitted = true;
    this.userDetails.username = this.signUpForm.value.userData.username;
    this.userDetails.email = this.signUpForm.value.userData.email;
    this.userDetails.secret = this.signUpForm.value.secret;
    this.userDetails.answer = this.signUpForm.value.questAns;
    this.userDetails.gender = this.signUpForm.value.gender;
    this.signUpForm.reset();
  }
}
