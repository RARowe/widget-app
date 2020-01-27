import { Component, OnInit, Input } from '@angular/core';
import { Widget } from '../widget';

@Component({
  selector: 'widget-card',
  templateUrl: './widget-card.component.html',
  styleUrls: ['./widget-card.component.css']
})
export class WidgetCardComponent implements OnInit {
  @Input()
  public widget: Widget;

  @Input()
  public detail: boolean;

  constructor() { }

  ngOnInit() {
    console.log('widget', this.widget);
  }

}
