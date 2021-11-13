import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

// GET url
  private URL = 'http://localhost:4000/api';
  constructor(private http: HttpClient) { }
  
// This part is doing the GET part + the artist 
  getTasks() {
    return this.http.get<any>(this.URL + '/artists');
  }

  getTasksById(id:any){
    return this.http.get<any>(this.URL + '/artists/' + id)
  }
}
