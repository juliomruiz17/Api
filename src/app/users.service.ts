import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import{Usert} from'./componente/user/usert.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'https://jsonplaceholder.typicode.com/users'

  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<Usert[]>(this.apiUrl)
  }
}