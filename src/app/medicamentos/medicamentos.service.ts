import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError, forkJoin } from 'rxjs';
import { catchError, map, concatAll } from 'rxjs/operators';

import { Medication } from './medication';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })

export class MedicationService {

  private readonly URI: string;

  constructor(private http: HttpClient) {
    this.URI = `${environment.api}medication`;
  }

  public getAllMedication(): Observable<Array<Medication>> {
    return this.http.get<Array<Medication>>(this.URI, { responseType: 'json' })
      .pipe(
        map(res => res),
        catchError(this.handleError)
      );
  }

  public addMedication(data: Medication): Observable<Medication> {
    return this.http.post<Medication>(this.URI, data, { responseType: 'json' })
      .pipe(
        catchError(this.handleError)
      );
  }

  public updateMedication(data: Medication): Observable<Medication> {
    return this.http.put<Medication>(`${this.URI}/${data.id}`, data, { responseType: 'json' })
      .pipe(
        catchError(this.handleError)
      );
  }

  public removeMedication(ids: Array<string>): Observable<Array<string>> {
    return <Observable<Array<string>>>forkJoin(
      ids.map(id => <Observable<Array<string>>>this.http.delete(`${this.URI}/${id}`, { responseType: 'json' }))
    ).pipe(
      concatAll(),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }

}
