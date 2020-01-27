import { Component, OnInit } from '@angular/core';
import { WidgetService } from '../widget.service';
import { Observable } from 'rxjs';
import { Widget } from '../widget';

var showCards = true;
@Component({
  selector: 'app-widget-list',
  templateUrl: './widget-list.component.html',
  styleUrls: ['./widget-list.component.css']
})
export class WidgetListComponent implements OnInit {
  public displayedColumns = ['image','name', 'description', 'revenue', 'timestamp'];
  public dataSource: any;
  constructor(private readonly _widgets: WidgetService) { }

  ngOnInit() {
    this._widgets.getAll().subscribe(ws => this.dataSource = ws);
  }

  public get showCards(): boolean {
    return showCards;
  }
  public showCardView() {
    showCards = true;
  }
  public showTableView() {
    showCards = false;
  }
  public getWidgets(): Observable<Widget[]> {
    return this._widgets.getAll();
  }
}
