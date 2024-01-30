import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PitLib} from "../../../helpers/PitLib";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {
  protected options:any={
    headers:{
      // 'Content-Type': "application/json",
    }
  }
  constructor(protected http:HttpClient) {
    if (PitLib.User.isLoggedIn()){
      this.options.headers['Authorization'] = 'Bearer ' + PitLib.User.data().token;
    }
  }
  public create(endpoint:string,formData:any,queryParams:any):Observable<any>{
    let f=new FormData()
    f.append('title',formData.title)
    f.append('category_id',formData.category_id)
    f.append('image',formData.image)
    this.options.params=queryParams
    return this.http.post(endpoint,f,this.options)
  }
}
