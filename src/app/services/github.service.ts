import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubService extends DataService {
  constructor(httpClient: HttpClient) {
    super('https://api.github.com/users/mibrahim09/followers', httpClient);
  }
}
