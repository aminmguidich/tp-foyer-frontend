import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BlocService {

 
  readonly API_URL = 'http://172.20.10.2:8082/tpFoyer17/api/blocs';

  constructor(private httpClient: HttpClient) { }
  getAllbloc() {
    return this.httpClient.get(`${this.API_URL}/retrieveBlocs`)
  }
  //add method
  addbloc(bloc : any) {
    return this.httpClient.post(`${this.API_URL}/addBloc`, bloc)
  }
  
}