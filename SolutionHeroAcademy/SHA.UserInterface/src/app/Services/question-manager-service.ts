import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { ResponseGetRandomQuestion } from '../Models/QuestionManagerServiceModel';

@Injectable({
  providedIn: 'root'
})

export class QuestionManagerService {
  private readonly uri = environment.SERVICE_URI;

  constructor(private httpClient: HttpClient) {
  }

  public getRandomQuestion(): Observable<ResponseGetRandomQuestion> {
    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'ngrok-skip-browser-warning': 'true'
    });

    return this.httpClient.get<ResponseGetRandomQuestion>(`${this.uri}QuestionManager/GetRandomQuestion`, {headers});
  }
}
