import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WidgetDetailComponent } from './widget-detail/widget-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetListComponent,
    WidgetDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
