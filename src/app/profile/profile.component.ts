import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  profile = {
    username: '',
    level: 0,
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((p: any) => {
      this.profile = p.params;
    });
  }
}
