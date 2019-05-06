import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:4000/login';

  constructor(private http: HttpClient) {
  }

  /*Sending User Inputted data bankend services and returning the response to Login ts*/
  authenticate(user) {
    return this.http.post(`${this.uri}`, user);
  }

}
