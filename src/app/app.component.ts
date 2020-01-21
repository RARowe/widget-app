import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { WidgetService } from './widget.service';
import { Widget } from './widget';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'widget-app';
  constructor(private readonly _widgets: WidgetService) { 
    this.getWidgets()
  }

  public getWidgets(){//: Observable<Widget[]> {
    return this._widgets.getAll().subscribe(ws => console.log(ws));
  }
}
