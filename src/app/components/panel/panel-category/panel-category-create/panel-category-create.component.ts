import { Component } from '@angular/core';
import {ApiService} from "../../../../services/api-common/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";
import {Endpoints} from "../../../../../helpers/Endpoints";
import {PitLib} from "../../../../../helpers/PitLib";
import {CategoryService} from "../../../../services/category/category.service";

@Component({
  selector: 'app-panel-category-create',
  templateUrl: './panel-category-create.component.html',
  styleUrls: ['./panel-category-create.component.css']
})
export class PanelCategoryCreateComponent {
  constructor(protected categoryService:CategoryService,protected route: ActivatedRoute,protected router: Router) {
  }
  loading:boolean = false
  displayImage:string=''
  form=new FormGroup({
    title:new FormControl(),
    image:new FormControl()
  })
  save() {
    this.loading=true
    this.categoryService.create(Endpoints.Category.Create,this.form.value,{}).subscribe(d => {
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
}
