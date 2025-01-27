import { afterNextRender, afterRender, Component, Input } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { ChartComponent } from '../../../../components/chart/chart.component';
import { ScrollerModule } from 'primeng/scroller';
@Component({
  selector: 'section-three',
  standalone: true,
  imports: [ScrollerModule, ChartModule, ChartComponent],
  templateUrl: './section-three.component.html',
  styleUrl: './section-three.component.scss',
})
export class SectionThreeComponent {
  @Input()
  semesterData: any;
  @Input()
  genderData: any;
  @Input()
  semesterOptions: any;
  @Input()
  genderOptions: any;
  @Input()
  width: string = '400';
  @Input()
  height: string = '400';

  constructor() {
    afterRender(() => {
      this.setWidth();
    });
  }
  setWidth() {
    return globalThis.window.innerWidth > 756 ? '400' : '200';
  }
}
