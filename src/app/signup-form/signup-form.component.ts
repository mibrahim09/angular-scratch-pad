import { UsernameValidator } from './username.validators';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent implements OnInit {
  myFormGroup = new FormGroup({
    username: new FormControl(
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(5)],
      UsernameValidator.shouldBeUnique
    ),
    password: new FormControl('', Validators.required),
  });

  get usernameBox() {
    return this.myFormGroup.get('username');
  }

  constructor() {}

  ngOnInit(): void {}
}
