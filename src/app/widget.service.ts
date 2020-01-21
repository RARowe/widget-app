import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { WIDGETS } from './widgets';
import { Widget } from './widget';

@Injectable({
  providedIn: 'root',
})
export class WidgetService {

  constructor() { }

  public getAll(): Observable<Array<Widget>> {
      return of(WIDGETS);
  }
}