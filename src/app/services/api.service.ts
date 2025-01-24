import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { ApiReturn } from '../types/apiReturn';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://panoramads-api.onrender.com/"

  constructor(private http: HttpClient) { }

  getResponses(): Observable<ApiReturn> {
    return this.http.get<ApiReturn>(`${this.url}`)
  }

}
