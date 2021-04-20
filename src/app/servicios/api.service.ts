import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { clientesi } from '../interfaces/clientes';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string="https://fast-caverns-63520.herokuapp.com/api/user";

  constructor(private http:HttpClient) { }

  getalluser():Observable<clientesi[]>{

    let dir = this.url;


    return this.http.get<clientesi[]>(dir);
    

  }

  
}
