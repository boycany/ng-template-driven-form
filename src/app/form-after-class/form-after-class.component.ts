import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-after-class',
  templateUrl: './form-after-class.component.html',
  styleUrls: ['./form-after-class.component.css'],
})
export class FormAfterClassComponent implements OnInit {
  @ViewChild('f', { static: false }) userSubsciptionForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSub = 'Advanced';
  userInfo = {
    email: '',
    subscriptions: '',
    password: '',
  };
  submitted = false;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (!this.userSubsciptionForm.valid) {
      alert('Please complete the form.');
    }
    console.log(this.userSubsciptionForm);

    const { email, pwd, subscriptions } = this.userSubsciptionForm.value;
    this.userInfo = {
      email,
      subscriptions,
      password: pwd,
    };

    this.submitted = true;
    this.userSubsciptionForm.setValue({
      email: '',
      subscriptions: 'Advanced',
      pwd: '',
    });
  }
}
