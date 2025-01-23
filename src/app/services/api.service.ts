import { Injectable } from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
type ApiReturn = {
  data: {
    [key: string]: {
      "value": string
      "count": number
    }
  }
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = "https://panoramads-api.onrender.com/"

  constructor(private http: HttpClient) { }

  getResponses(): Observable<Object> {
    return this.http.get(`${this.url}`)
  }

}
