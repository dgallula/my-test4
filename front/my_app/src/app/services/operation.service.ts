import { Operation } from './../models/operation';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  constructor(private http: HttpClient) {}

  URL = 'http://localhost:3005/operations/';
  getOperations(): Observable<Operation[]> {
    return this.http.get<Operation[]>(this.URL);
  }

  addNewOperation(newOperation: Operation): Observable<Operation> {
    console.log(newOperation);
    return this.http.post<Operation>(this.URL, newOperation);
  }
  
}
