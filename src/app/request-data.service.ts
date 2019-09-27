import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RequestDataService {

  constructor(private httpCLient : HttpClient) { 
  }

  getData() {
    return this.httpCLient.get("https://www.reddit.com/r/aww/.json?limit=9");
  }
}
