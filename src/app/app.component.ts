import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-scratch-pad';
  post = {
    isFav: true,
    title: 'The rise of the planet of the apes',
  };
  tweet = {
    post: 'Here is the body of the tweet...',
    likesCount: 0,
    isLiked: false,
  };
  onLikeClicked() {
    var { isLiked, likesCount } = this.tweet;

    isLiked = !isLiked;
    likesCount = isLiked ? 1 : 0;

    this.tweet.likesCount = likesCount;
    this.tweet.isLiked = isLiked;
  }
  onFavoriteChanged(eventArgs: any) {
    console.log(eventArgs);
  }
}
