import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../widget.service';
import { Observable } from 'rxjs';
import { Widget } from '../widget';

@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  constructor(private readonly _widgets: WidgetService) { }

  ngOnInit() {
  }

  public getWidgets(): Observable<Widget[]> {
    return this._widgets.getAll();
  }
}
