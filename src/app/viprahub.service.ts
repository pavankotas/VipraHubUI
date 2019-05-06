import { Injectable } from '@angular/core';
import {Observable, of, throwError} from 'rxjs';
import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {catchError, tap, map} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:4000/api';
const apiUrlCategory = 'http://localhost:4000/category';
const apiUrlUserModelsData = 'http://localhost:4000/usermodels';

@Injectable({
  providedIn: 'root'
})

export class ViprahubService {
  public searchText;
  public searchResults;
  public backupResults;
  constructor(private http: HttpClient) {
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        'Backend returned code ${error.status}, ' +
        'body was: ${error.error}');
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    const body = res;
    return body || {};
  }
  searchMetadataByText(text: string): Observable<any> {
    return this.http.get(`${apiUrl}/getAll?q=` + text, httpOptions).pipe(
      catchError(this.handleError));
  }
  searchUserModels(userid: string): Observable<any> {
    return this.http.get(`${apiUrl}/getModels?userid=` + userid, httpOptions).pipe(
      catchError(this.handleError));
  }
  searchMetadataByCategory(categoryID: string): Observable<any> {
    return this.http.get(`${apiUrl}/${categoryID}`, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  postMetadata(data): Observable<any> {
    return this.http.post(apiUrl, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getMetadata(): Observable<any> {
    return this.http.get(`${apiUrl}/getAll`, httpOptions).pipe(
      catchError(this.handleError));
  }
  createCategory(data): Observable<any> {
    return this.http.post(apiUrlCategory, data, httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }
  getCategory(): Observable<any> {
    return this.http.get(apiUrlCategory, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getSearchResults(text) {
    this.searchMetadataByText(text).subscribe(res => {
      console.log(res);
      this.searchResults = res;
      this.backupResults = res;
    }, err => {
      console.log(err);
    });
  }
  getModelById(id) {
    return this.http.get(`${apiUrl}/getModel/${id}`, httpOptions);
  }
  // getUserModelsData(userid) {
  //   this.searchUserModels(userid).subscribe(res => {
  //     console.log(res);
  //   }, err => {
  //     console.log(err);
  //   });
  // }
}
