import { Component } from '@angular/core';
import {ApiService} from "../../../../services/api-common/api.service";
import {Endpoints} from "../../../../../helpers/Endpoints";
import {Env} from "../../../../../helpers/Env";
declare var Flickity:any
@Component({
  selector: 'app-homepage-category-carousel',
  templateUrl: './homepage-category-carousel.component.html',
  styleUrls: ['./homepage-category-carousel.component.css']
})
export class HomepageCategoryCarouselComponent {
  categories: any
  constructor(protected apiService: ApiService) {
    this.apiService.post(Endpoints.Category.List,{},{pagination:100}).subscribe(d=>{
      this.categories=(d.status)?d.data.data:null
      if (d.status){
        setTimeout(function () {
          var flkty = new Flickity( '.categ-carousel', {
            cellAlign: 'left',
            contain: true
          });
        },400)
      }
    })
  }

  protected readonly Env = Env;
}
