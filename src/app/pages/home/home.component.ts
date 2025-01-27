import { Component, inject, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ChartModule } from 'primeng/chart';
import { ApiReturn, Data } from '../../types/apiReturn';
import { Response } from '../../types/responses';
import { $dt } from '@primeng/themes';
import { SectionOneComponent } from './components/section-one/section-one.component';
import { SectionTwoComponent } from './components/section-two/section-two.component';
import { SectionThreeComponent } from './components/section-three/section-three.component';
import { ConclusionComponent } from './components/conclusion/conclusion.component';
import { SectionFourComponent } from './components/section-four/section-four.component';
import { SectionFiveComponent } from './components/section-five/section-five.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ChartModule,
    ConclusionComponent,
    SectionOneComponent,
    SectionTwoComponent,
    SectionThreeComponent,
    SectionFourComponent,
    SectionFiveComponent,
  ],
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
  sectionFiveOptions: any;

  sectionOneData: any;
  sectionTwoData: any;
  semesterData: any;
  genderData: any;
  sectionFourData: any;
  sectionFiveData: any;

  sectionOneQuestion: any;
  sectionTwoQuestion: any;
  semesterQuestion: any;
  genderQuestion: any;
  habitationQuestion: any;
  desiredAreaQuestion: any;
  workingAreaQuestion: any;
  workAreaQuestion: any;

  responses: any;

  regionsOrder: string[] = [
    'Zona Norte',
    'Zona Oeste',
    'Zona Sul',
    'Zona Leste',
    'Centro',
  ];

  areasOrder: string[] = [
    'Garantia de Qualidade/QA',
    'Desenvolvimento Back-End',
    'Análise de Dados',
    'Cibersegurança / Segurança da Informação',
    'Desenvolvimento Full-Stack',
    'Machine Learning/Inteligência Artificial',
    'Desenvolvimento de Jogos',
  ];

  constructor() {
    this.apiService.getResponses().subscribe((res: ApiReturn) => {
      this.data = res.data;
      this.initChartOne();
      this.initChartTwo();
      this.initChartThree();
      this.initChartFour();
      this.initChartFive();
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
      .sort((a: Response, b: Response) => Number(a.value) - Number(b.value));

    this.sectionTwoData = {
      labels: [1, 2, ...this.responses.map((obj: Response) => obj.value)],
      datasets: [
        {
          label: 'Nível de satisfação (escala de 1 a 5)',
          data: [0, 0, ...this.responses.map((obj: Response) => obj.count)],
          backgroundColor: [
            $dt('rose.400').value,
            $dt('rose.400').value,
            $dt('green.400').value,
            $dt('fuchsia.400').value,
            $dt('yellow.300').value,
          ],
        },
      ],
    };

    this.sectionTwoOptions = {
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
          backgroundColor: [$dt('indigo.400').value, $dt('cyan.300').value],
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
          backgroundColor: [$dt('teal.400').value, $dt('orange.400').value],
        },
      ],
    };

    this.genderOptions = {
      responsive: true,
    };
  }

  initChartFour() {
    this.workAreaQuestion = [
      { value: 'Zona Leste', count: 0 },
      { value: 'Zona Norte', count: 0 },
      ...this.data.regiao_trabalho.filter(
        (obj: Response) => obj.value != 'Não atuo no momento'
      ),
    ].sort(
      (a: Response, b: Response) =>
        this.regionsOrder.indexOf(a.value) - this.regionsOrder.indexOf(b.value)
    );

    this.habitationQuestion = [
      { value: 'Zona Leste', count: 0 },
      { value: 'Zona Sul', count: 0 },
      ...this.data.regiao,
    ].sort(
      (a: Response, b: Response) =>
        this.regionsOrder.indexOf(a.value) - this.regionsOrder.indexOf(b.value)
    );

    this.sectionFourData = {
      labels: [...this.workAreaQuestion.map((obj: Response) => obj.value)],
      datasets: [
        {
          label: 'Habita a região',
          data: [...this.habitationQuestion.map((obj: Response) => obj.count)],
          backgroundColor: [$dt('sky.400').value],
        },
        {
          label: 'Trabalha na região',
          data: [...this.workAreaQuestion.map((obj: Response) => obj.count)],
          backgroundColor: [$dt('slate.400').value],
        },
      ],
    };

    this.sectionFourOptions = {
      responsive: true,
    };
  }
  initChartFive() {
    this.workingAreaQuestion = [
      { value: 'Desenvolvimento de Jogos', count: 0 },
      ...this.data.area_atual,
    ]
      .filter(
        (obj: Response) =>
          obj.value != 'Não atuo no momento' && this.areasOrder.includes(obj.value)
      )
      .sort(
        (a: Response, b: Response) =>
          this.areasOrder.indexOf(a.value) - this.areasOrder.indexOf(b.value)
      );

    this.desiredAreaQuestion = [
      { value: 'Garantia de Qualidade/QA', count: 0 },
      ...this.data.area_desejo,
    ]
      .filter((obj: Response) => this.areasOrder.includes(obj.value))
      .sort(
        (a: Response, b: Response) =>
          this.areasOrder.indexOf(a.value) - this.areasOrder.indexOf(b.value)
      );


    this.sectionFiveData = {
      labels: [...this.workingAreaQuestion.map((obj: Response) => obj.value)],
      datasets: [
        {
          type: 'bar',
          label: 'Área de desejo',
          data: [
            ...this.desiredAreaQuestion.map((obj: Response) => obj.count),
          ],
          backgroundColor: [$dt('orange.400').value],
        },
        {
          type: 'bar',
          label: 'Área de trabalho',
          data: [...this.workingAreaQuestion.map((obj: Response) => obj.count)],
          backgroundColor: [$dt('stone.400').value],
        },
      ],
    };

    this.sectionFiveOptions = {
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 0.8,
      plugins: {
        tooltip: {
          mode: 'index',
          intersect: false,
        },
      },
      scales: {
        x: {
          stacked: true,
          grid: {
            drawBorder: false,
          },
        },
        y: {
          stacked: true,

          grid: {
            drawBorder: false,
          },
        },
      },
    };
  }
}
