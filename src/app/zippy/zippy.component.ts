import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
})
export class ZippyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isActive = false;

  getArrow() {
    return this.isActive ? 'arrow-up' : 'arrow-down';
  }
  hoverContent() {
    this.isActive = !this.isActive;
  }
}
