import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.css'],
})
export class CoursesFormComponent implements OnInit {
  constructor() {}
  courseCategories = [
    { id: 1, name: 'Development' },
    { id: 2, name: 'Art' },
    { id: 3, name: 'Education' },
  ];
  ngOnInit(): void {}
}
