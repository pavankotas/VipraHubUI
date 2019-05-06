import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  uri = 'http://localhost:4000/registration';

  constructor(private http: HttpClient) {
  }
/*Sending received details to backend services to add user and returning response to registration ts */
  addUser(userDetails) {
    console.log(userDetails);
    return this.http.post(`${this.uri}`, userDetails);
  }

}
