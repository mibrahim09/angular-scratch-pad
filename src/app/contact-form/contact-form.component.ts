import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  constructor() {}

  contactMethods = [
    { id: 1, name: 'Phone' },
    { id: 2, name: 'Mobile' },
    { id: 3, name: 'Email' },
  ];

  ngOnInit(): void {}

  log(formControl: any) {
    console.log(formControl);
  }
  submit(form: any) {
    console.log(form);
  }
}
