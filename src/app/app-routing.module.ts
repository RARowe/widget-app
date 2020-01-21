import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetDetailComponent } from './widget-detail/widget-detail.component';
import { LineChartComponent } from './line-chart/line-chart.component';


const routes: Routes = [
  { path: '', component: WidgetListComponent },
  { path: 'widgets', component: WidgetListComponent },
  { path: 'widgets/:id', component: WidgetDetailComponent },
  { path: 'chart', component: LineChartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
