import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Widget } from '../widget';
import { WidgetService } from '../widget.service';

@Component({
  selector: 'app-widget-detail',
  templateUrl: './widget-detail.component.html',
  styleUrls: ['./widget-detail.component.css']
})
export class WidgetDetailComponent implements OnInit {
  public widget: Widget;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly _widgets: WidgetService
  ) { }

  ngOnInit() {
    this._widgets.get(this.route.snapshot.paramMap.get('id')).subscribe(w => this.widget = w);
  }
}
