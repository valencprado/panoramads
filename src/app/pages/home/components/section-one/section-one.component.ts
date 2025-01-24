import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../../../services/api.service';
import { ChartModule } from 'primeng/chart';
import { ApiReturn, Data } from '../../../../types/apiReturn';
import { $dt } from '@primeng/themes';

@Component({
  selector: 'section-one',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.scss',
})
export class SectionOneComponent implements OnInit {
  data: Data = {
    idade: [
      {
        value: '',
        count: 0,
      },
    ],
    genero: [
      {
        value: '',
        count: 0,
      },
    ],
    semestre: [
      {
        value: '',
        count: 0,
      },
    ],
    atuacao_atual: [
      {
        value: '',
        count: 0,
      },
    ],
    modalidade_trabalho: [
      {
        value: '',
        count: 0,
      },
    ],
    regiao_trabalho: [
      {
        value: '',
        count: 0,
      },
    ],
    regiao: [
      {
        value: '',
        count: 0,
      },
    ],
    porte_empresa: [
      {
        value: '',
        count: 0,
      },
    ],
    area_atual: [
      {
        value: '',
        count: 0,
      },
    ],
    area_desejo: [
      {
        value: '',
        count: 0,
      },
    ],
    satisfacao_trabalho: [
      {
        value: '',
        count: 0,
      },
    ],
    dificuldade_trabalho: [
      {
        value: '',
        count: 0,
      },
    ],
  };
  apiService: ApiService = inject(ApiService);
  options: any;
  question: any;
  data_formatted: any;

  constructor() {
    this.apiService.getResponses().subscribe((res: ApiReturn) => {
      this.data = res.data;
      this.initChart();
    });
  }
  ngOnInit(): void {}

  initChart() {
    this.question = this.data.atuacao_atual;
    this.data_formatted = {
      labels: this.question.map(
        (obj: { value: string; count: string }) => obj.value
      ),
      datasets: [
        {
          data: this.question.map(
            (obj: { value: string; count: string }) => obj.count
          ),
          backgroundColor: [
            $dt('emerald.400').value,
            $dt('cyan.400').value,
            $dt('rose.400').value,
          ],

        },
      ],
    };

    this.options = {
      responsive: true,
    };
  }
}
