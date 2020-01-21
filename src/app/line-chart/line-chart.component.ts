import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { WidgetService } from '../widget.service';
import { Widget } from '../widget';


interface ChartData {
  data: number;
  label: string;
}

function widgetsToChartData(widgets: Widget[]): ChartData[] {
  return widgets.map(widgetToChartData);
}

function widgetToChartData(widget: Widget): ChartData {
  return {
    data: widget.revenue,
    label: (new Date(widget.timestamp)).getFullYear().toString()
  }
}

function groupBy(xs, key) {
  return xs.reduce(function(rv, x) {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public lineChartData: ChartDataSets[];
  public lineChartLabels: Label[] = [];
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(25, 118, 210,0.3)',
    },
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];

  constructor(private readonly _widgets: WidgetService) { }

  ngOnInit() {
    this._widgets.getAll()
    .pipe(
      map(widgetsToChartData),
      tap(chartData => this.lineChartLabels = [...new Set(chartData.map(d => d.label))].sort())
    )
    .subscribe(chartData => {
      const groups = groupBy(chartData, 'label');
      const data: number[] = [];

      for (const [_, value] of Object.entries(groups)) {
        data.push((<Array<ChartData>>value).map(cd => cd.data).reduce((acc, v) => acc + v));
      }
      console.log(data);
      this.lineChartData = [
        { data: data, label: 'Revenue' },
      ]
    });
  }
}
