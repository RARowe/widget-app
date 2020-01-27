import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { first, filter } from 'rxjs/operators';
import { WidgetService } from './widget.service';
import { Widget } from './widget';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'widget-app';
  route = window.location.pathname;
  constructor(router: Router) {

    router.events
      .pipe(filter(e => e instanceof NavigationStart))  
    .subscribe((event: any) => {
      this.route = event.url;
    })
  }
}
