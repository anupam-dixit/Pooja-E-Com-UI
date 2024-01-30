import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PitLib} from "../../../helpers/PitLib";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  protected options:any={
    headers:{
      'Content-Type': "application/json",
    }
  }
  constructor(protected http:HttpClient) {
    if (PitLib.User.isLoggedIn()){
      this.options.headers['Authorization'] = 'Bearer ' + PitLib.User.data().token;
    }
  }

  public post(endpoint:string,formData:any,queryParams:any):Observable<any>{
    this.options.params=queryParams
    return this.http.post(endpoint,formData,this.options)
  }
  public delete(endpoint:string,queryParams:any):Observable<any>{
    this.options.params=queryParams
    return this.http.delete(endpoint,this.options)
  }
}
