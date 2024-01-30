import { Component } from '@angular/core';
import {ApiService} from "../../../../services/api-common/api.service";
import {SubCategoryService} from "../../../../services/sub-category/sub-category.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Endpoints} from "../../../../../helpers/Endpoints";
import {switchMap} from "rxjs";
import {Env} from "../../../../../helpers/Env";
import {PitLib} from "../../../../../helpers/PitLib";

@Component({
  selector: 'app-panel-sub-category-edit',
  templateUrl: './panel-sub-category-edit.component.html',
  styleUrls: ['./panel-sub-category-edit.component.css']
})
export class PanelSubCategoryEditComponent {
  constructor(protected apiService:ApiService,protected subCategService:SubCategoryService,protected route: ActivatedRoute,protected router: Router) {
    this.route.paramMap
      .pipe(
        switchMap(data => {
          this.loading=true
          this._id = data.get('_id');
          return this.apiService.post(Endpoints.SubCategory.List, { _id: this._id }, {});
        })
      )
      .subscribe(d =>{
        this.data = d.data.data[0]
        this.form.patchValue({
          title: this.data.title,
          category_id: this.data.category[0]._id
        })
        this.loading=false
      });
  }
  _id:undefined|null|string
  data:any
  categories:any
  displayImage:string=''
  form=new FormGroup({
    title:new FormControl(),
    category_id:new FormControl(),
    image:new FormControl()
  })
  loading:boolean = false
  ngAfterViewInit() {
    this.apiService.post(Endpoints.Category.List,{},{pagination:500}).subscribe(d=>{
      if (d.status){
        this.categories=d.data.data
      }
    })
  }
  onFile(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    // @ts-ignore
    const file = fileInput.files[0];
    if (file) {
      this.form.patchValue({
        image: file
      })
      const reader = new FileReader();
      reader.onload = (e) => {
        // @ts-ignore
        this.displayImage = e.target?.result as string;
      };
      // Read the file as a data URL
      reader.readAsDataURL(file);
    }
  }

  save() {
    this.loading=true
    this.subCategService.create(Endpoints.SubCategory.Edit+'/'+this._id,this.form.value,{}).subscribe(d => {
      PitLib.Toast((d.status)?'success':'error',null,d.message);
      this.loading=false
      if (d.status){
        this.router.navigate(['../'],{relativeTo:this.route})
      }
    })
  }

  protected readonly Env = Env;
}
