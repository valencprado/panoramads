import { Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart'
@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
@Input()
data = []
@Input()
type: "bar" | "line" | "scatter" | "bubble" | "pie" | "doughnut" | "polarArea" | "radar" | undefined = 'bar'
}
