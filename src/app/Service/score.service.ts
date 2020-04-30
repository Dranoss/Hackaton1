import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  constructor(private http: HttpClient) { }

  post(score ){
    return this.http.post('https://af45a576.ngrok.io/scores', score);
  }
  get(){
    return this.http.get('https://af45a576.ngrok.io/scores');
  }
}

