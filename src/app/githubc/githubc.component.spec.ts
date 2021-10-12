import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubcComponent } from './githubc.component';

describe('GithubcComponent', () => {
  let component: GithubcComponent;
  let fixture: ComponentFixture<GithubcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
