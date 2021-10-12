import { GithubService } from './../services/github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'github',
  templateUrl: './githubc.component.html',
  styleUrls: ['./githubc.component.css'],
})
export class GithubcComponent implements OnInit {
  followers: any;

  constructor(private service: GithubService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe((response) => {
      this.followers = response;
      console.log(this.followers);
    });
  }
}
