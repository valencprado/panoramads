import { Component, inject, OnInit } from '@angular/core';
import { SectionOneComponent } from './components/section-one/section-one.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SectionOneComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {

data: Object = {}

constructor() {

}

ngOnInit(): void {

}

}
