import { NotFoundError } from '../errors/not-found-error';
import { AppError } from '../errors/app-error';
import { PostService } from '../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  constructor(private service: PostService) {}

  posts: any;

  ngOnInit(): void {
    this.service.getAll().subscribe(
      (response: any) => {
        this.posts = response;
        console.log(response);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError) alert('posts doesnt exist!');
        throw error;
      }
    );
  }
  submit(post: any) {
    this.service.create(post.value).subscribe((response: any) => {
      console.log(response);
    });
  }
}
