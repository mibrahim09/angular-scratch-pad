import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css'],
})
export class LikeButtonComponent implements OnInit {
  @Input('likes-count')
  likesCount = 0;

  @Input('is-liked')
  isLiked = false;

  @Output('like-clicked')
  likeAlert = new EventEmitter();

  onClick() {
    this.isLiked = !this.isLiked;
    this.likeAlert.emit();
  }

  getLike() {
    return this.isLiked ? 'fa fa-heart' : 'fa fa-heart-o';
  }

  constructor() {}

  ngOnInit(): void {}
}
