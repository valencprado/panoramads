import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
apiService: ApiService = inject(ApiService);

constructor() {
this.apiService.getResponses().subscribe((res) => {
  console.log(res)
})
}
}
