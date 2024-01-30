import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../../../services/api-common/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Endpoints} from "../../../../../helpers/Endpoints";
import {switchMap} from "rxjs";
import {PitLib} from "../../../../../helpers/PitLib";

@Component({
  selector: 'app-panel-role-edit',
  templateUrl: './panel-role-edit.component.html',
  styleUrls: ['./panel-role-edit.component.css']
})
export class PanelRoleEditComponent {
  loading: boolean=true;
  form=new FormGroup({
    title: new FormControl(),
  });
  _id:undefined|null|string
  data:any
  constructor(protected apiService: ApiService, protected route: ActivatedRoute,protected router: Router) {
    this.route.paramMap
      .pipe(
        switchMap(data => {
          this.loading=true
          this._id = data.get('_id');
          return this.apiService.post(Endpoints.User.Role.List, { _id: this._id }, {});
        })
      )
      .subscribe(d =>{
        this.data = d.data.data[0]
        this.form.patchValue({
          title: this.data.title,
        })
        this.loading=false
      });
  }

  save() {
    this.loading=true
    this.apiService.post(Endpoints.User.Role.EDIT+'/'+this._id, this.form.value,{}).subscribe(d=>{
      PitLib.Toast((d.status)?'success':'warning',null,d.message);
      this.loading=false
      if (d.status){
        this.router.navigate(['../../'],{relativeTo:this.route})
      }
    })
  }

  protected readonly JSON = JSON;
}
