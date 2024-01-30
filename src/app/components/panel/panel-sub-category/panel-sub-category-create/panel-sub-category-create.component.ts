import { Component } from '@angular/core';
import {ApiService} from "../../../../services/api-common/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Endpoints} from "../../../../../helpers/Endpoints";
import {PitLib} from "../../../../../helpers/PitLib";
import {SubCategoryService} from "../../../../services/sub-category/sub-category.service";
declare var $: any;
declare var Tagify: any;
@Component({
  selector: 'app-panel-sub-category-create',
  templateUrl: './panel-sub-category-create.component.html',
  styleUrls: ['./panel-sub-category-create.component.css']
})
export class PanelSubCategoryCreateComponent {
  constructor(protected apiService:ApiService,protected subCategService:SubCategoryService,protected route: ActivatedRoute,protected router: Router) {
  }
  categories:any
  loading:boolean = false
  displayImage:string=''
  image:File|undefined
  form=new FormGroup({
    title:new FormControl(),
    category_id:new FormControl(),
    image:new FormControl()
  })
  save() {
    this.loading=true
    this.subCategService.create(Endpoints.SubCategory.Create,this.form.value,{}).subscribe(d => {
      PitLib.Toast((d.status)?'success':'error',null,d.message);
      this.loading=false
      if (d.status){
        this.router.navigate(['../'],{relativeTo:this.route})
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
  ngAfterViewInit() {
    this.apiService.post(Endpoints.Category.List,{},{pagination:500}).subscribe(d=>{
      if (d.status){
        this.categories=d.data.data
      }
    })
  }

}
