import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ListService {
 private baseURL ='https://jsonplaceholder.typicode.com/posts'
  constructor(private http : HttpClient) { }


  getData(){
    return this.http.get(this.baseURL);
  }
}
