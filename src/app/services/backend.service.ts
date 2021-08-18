import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  private rootPath = "http://localhost:3000/"
  constructor(private httpClient: HttpClient) { }

  public post(path: any, data: any){
   return this.httpClient.post(this.rootPath + path, data)
  }
  public get(path: any){
    return this.httpClient.get(this.rootPath + path)
  }
}
