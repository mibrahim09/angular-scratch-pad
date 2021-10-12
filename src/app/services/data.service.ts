import { BadRequestError } from './../errors/bad-request-error';
import { AppError } from '../errors/app-error';
import { NotFoundError } from '../errors/not-found-error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class DataService {
  constructor(private url: string, private httpClient: HttpClient) {}

  getAll() {
    return this.httpClient.get(this.url).pipe(catchError(this.handleError));
  }
  handleError(error: HttpErrorResponse) {
    if (error.status == 400) return throwError(new BadRequestError(error));
    if (error.status == 404) return throwError(new NotFoundError(error));
    return throwError(new AppError(error));
  }

  create(post: any) {
    return this.httpClient
      .post(this.url, JSON.stringify(post))
      .pipe(catchError(this.handleError));
  }
}
