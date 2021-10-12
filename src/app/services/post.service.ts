import { DataService } from './data.service';
import { BadRequestError } from './../errors/bad-request-error';
import { AppError } from '../errors/app-error';
import { NotFoundError } from '../errors/not-found-error';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostService extends DataService {
  constructor(httpClient: HttpClient) {
    super('http://jsonplaceholder.typicode.com/posts', httpClient);
  }
}
