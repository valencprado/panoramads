import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ChartModule } from 'primeng/chart';
import { ApiReturn, Data } from '../../types/apiReturn';
import { Response } from '../../types/responses';
import { $dt } from '@primeng/themes';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionThreeComponent } from "./components/section-three/section-three.component";
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionOneComponent, SectionTwoComponent, ChartModule, SectionThreeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
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

  sectionOneOptions: any;
  sectionTwoOptions: any;
  semesterOptions: any;
  genderOptions: any;
  sectionFourOptions: any;

  sectionOneData: any;
  sectionTwoData: any;
  semesterData: any;
  genderData: any;
  sectionFourData: any;

  sectionOneQuestion: any;
  sectionTwoQuestion: any;
  semesterQuestion: any;
  genderQuestion: any;
  sectionFourQuestion: any;
  responses: any;
  constructor() {
    this.apiService.getResponses().subscribe((res: ApiReturn) => {
      this.data = res.data;
      this.initChartOne();
      this.initChartTwo();
      this.initChartThree();
      // this.initChartFour();
    });
  }

  initChartOne() {
    this.sectionOneQuestion = this.data.atuacao_atual;
    this.sectionOneData = {
      labels: this.sectionOneQuestion.map((obj: Response) => obj.value),
      datasets: [
        {
          data: this.sectionOneQuestion.map((obj: Response) => obj.count),
          backgroundColor: [
            $dt('emerald.400').value,
            $dt('cyan.400').value,
            $dt('rose.400').value,
          ],
        },
      ],
    };

    this.sectionOneOptions = {
      responsive: true,
    };
  }

  initChartTwo() {
    this.sectionTwoQuestion = this.data.satisfacao_trabalho;

    this.responses = this.sectionTwoQuestion
      .filter((obj: Response) => obj.value != '')
      .map((obj: Response) => Number(obj.value))
      .sort();
    this.sectionTwoData = {
      labels: [1, 2, ...this.responses],
      datasets: [
        {
          label: 'Nível de satisfação (escala de 1 a 5)',
          data: [
            0,
            0,
            ...this.sectionTwoQuestion
              .filter((obj: Response) => obj.value != '')
              .map((obj: Response) => obj.count),
          ],
          backgroundColor: [
            $dt('rose.400').value,
            $dt('rose.400').value,
            $dt('emerald.400').value,
            $dt('cyan.400').value,
            $dt('rose.400').value,
          ],
        },
      ],
    };

    this.sectionOneOptions = {
      responsive: true,
    };
  }

  initChartThree() {
    // gráfico 1 - gênero
    this.semesterQuestion = this.data.genero;
    this.semesterData = {
      labels: this.semesterQuestion.map((obj: Response) => obj.value),
      datasets: [
        {
          data: this.semesterQuestion.map((obj: Response) => obj.count),
          backgroundColor: [
            $dt('indigo.400').value,
            $dt('cyan.300').value,

          ],
        },
      ],
    };

    this.semesterOptions = {
      responsive: true,
    };
    // gráfico 2 - semestre
    this.genderQuestion = this.data.semestre;
    this.genderData = {
      labels: this.genderQuestion.map((obj: Response) => obj.value),
      datasets: [
        {
          data: this.genderQuestion.map((obj: Response) => obj.count),
          backgroundColor: [
            $dt('teal.400').value,
            $dt('orange.400').value,

          ],
        },
      ],
    };

    this.genderOptions = {
      responsive: true,
    };
  }
}
