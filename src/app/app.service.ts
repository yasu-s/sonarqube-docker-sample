import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Memo } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) { }

  get(): Observable<Memo> {
    return this.http.get<Memo>('./assets/data.json');
  }
}
