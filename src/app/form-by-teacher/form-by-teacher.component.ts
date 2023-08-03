import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-by-teacher',
  templateUrl: './form-by-teacher.component.html',
  styleUrls: ['./form-by-teacher.component.css'],
})
export class FormByTeacherComponent {
  @ViewChild('f') signupForm: NgForm;
  defaultQuestion = 'pet';
  answer = '';
  genders = ['male', 'female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    //1.
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male',
    // });

    //2. Better Approach
    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  onSubmit() {
    this.submitted = true;
    console.log('this.signupForm :>> ', this.signupForm);

    const { gender, questionAnswer, secret, userData } = this.signupForm.value;
    const { username, email } = userData;

    this.user = {
      username,
      email,
      secretQuestion: secret,
      answer: questionAnswer,
      gender,
    };

    this.signupForm.reset();
    //or using this.signupForm.setValue() which will reset the form to specific values.
  }
}
