import { Injectable } from '@angular/core';

import { Http } from '@angular/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class HeaderService {
  constructor(private http: Http) {
  }

  public getJSON(): Observable<any> {
    return this.http.get('assets/json/menu.json');
  }
}
