import { Component } from '@angular/core';
import {ApiService} from "../../../../services/api-common/api.service";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Endpoints} from "../../../../../helpers/Endpoints";
import {PitLib} from "../../../../../helpers/PitLib";

@Component({
  selector: 'app-panel-role-create',
  templateUrl: './panel-role-create.component.html',
  styleUrls: ['./panel-role-create.component.css']
})
export class PanelRoleCreateComponent {
  constructor(protected appService:ApiService,protected route: ActivatedRoute,protected router: Router) {
  }
  loading:boolean = false
  form=new FormGroup({
    title:new FormControl()
  })
  save() {
    this.loading=true
    this.appService.post(Endpoints.User.Role.Create,this.form.value,{}).subscribe(d => {
      PitLib.Toast((d.status)?'success':'error',null,d.message);
      this.loading=false
      if (d.status){
        this.router.navigate(['../'],{relativeTo:this.route})
      }
    })
  }
}
