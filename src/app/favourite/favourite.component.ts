import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css'],
})
export class FavouriteComponent implements OnInit {
  constructor() {}

  @Input('is-favorite')
  isFavorited = false;

  @Output('change') onChange = new EventEmitter();

  hoverFavorite() {
    this.isFavorited = !this.isFavorited;
    this.onChange.emit(this.isFavorited);
  }
  renderStar() {
    return this.isFavorited ? 'fa fa-star' : 'fa fa-star-o';
  }
  ngOnInit(): void {}
}
