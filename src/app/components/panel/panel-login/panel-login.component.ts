import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../../services/api-common/api.service";
import {Endpoints} from "../../../../helpers/Endpoints";
import {PitLib} from "../../../../helpers/PitLib";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-panel-login',
  templateUrl: './panel-login.component.html',
  styleUrls: ['./panel-login.component.css']
})
export class PanelLoginComponent {
  constructor(protected apiService: ApiService,protected router: Router,protected activatedRoute:ActivatedRoute) {
  }
  form=new FormGroup({
    phone:new FormControl(''),
    password:new FormControl(''),
  })
  loading:boolean=false

  save() {
    this.loading=true
    this.apiService.post(Endpoints.User.Login,this.form.value,{}).subscribe(d=>{
      PitLib.Toast(d.status?'success':'warning','Authentication',d.message)
      if(d.status){
        PitLib.User.save(d.data)
        this.router.navigate(['../dashboard'],{relativeTo:this.activatedRoute});
      }
      else{
        this.loading=false
      }
    })
  }
}
