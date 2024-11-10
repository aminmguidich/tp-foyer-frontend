import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BlocService {

 
  readonly API_URL = 'http://localhost:8082/tpFoyer17/api/bloc';

  constructor(private httpClient: HttpClient) { }
  getAllbloc() {
    return this.httpClient.get(`${this.API_URL}/retrieveBlocs`)
  }
  addbloc(bloc : any) {
    return this.httpClient.post(`${this.API_URL}/addBloc`, bloc)
  }
  
}