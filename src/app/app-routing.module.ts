import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { WidgetDetailComponent } from './widget-detail/widget-detail.component';


const routes: Routes = [
  {
    path: '', component: WidgetListComponent
  },
  {
    path: 'widgets', component: WidgetListComponent
  },
  {
    path: 'widgets/:id', component: WidgetDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
