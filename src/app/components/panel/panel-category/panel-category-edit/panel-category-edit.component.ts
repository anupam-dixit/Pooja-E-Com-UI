import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../../../services/api-common/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {switchMap} from "rxjs";
import {Endpoints} from "../../../../../helpers/Endpoints";
import {PitLib} from "../../../../../helpers/PitLib";
import {Env} from "../../../../../helpers/Env";
import {CategoryService} from "../../../../services/category/category.service";

@Component({
  selector: 'app-panel-category-edit',
  templateUrl: './panel-category-edit.component.html',
  styleUrls: ['./panel-category-edit.component.css']
})
export class PanelCategoryEditComponent {
  loading: boolean=true;
  form=new FormGroup({
    title: new FormControl(),
    image:new FormControl()
  });
  _id:undefined|null|string
  data:any
  constructor(protected apiService: ApiService,protected categoryService:CategoryService, protected route: ActivatedRoute,protected router: Router) {
    this.route.paramMap
      .pipe(
        switchMap(data => {
          this.loading=true
          this._id = data.get('_id');
          return this.apiService.post(Endpoints.Category.List, { _id: this._id }, {});
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
    this.categoryService.create(Endpoints.Category.Edit+'/'+this._id, this.form.value,{}).subscribe(d=>{
      PitLib.Toast((d.status)?'success':'warning',null,d.message);
      this.loading=false
      if (d.status){
        this.router.navigate(['../../'],{relativeTo:this.route})
      }
    })
  }
  onFile(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    // @ts-ignore
    const file = fileInput.files[0];
    if (file) {
      console.log(file)
      this.form.patchValue({
        image: file
      })
      const reader = new FileReader();
      reader.onload = (e) => {
        // @ts-ignore
        // this.displayImage = e.target?.result as string;
      };
      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  }
  protected readonly JSON = JSON;
  protected readonly Env = Env;
}
