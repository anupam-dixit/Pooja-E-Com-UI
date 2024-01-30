import { Component } from '@angular/core';
import {ApiService} from "../../../services/api-common/api.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PitLib} from "../../../../helpers/PitLib";
import {Endpoints} from "../../../../helpers/Endpoints";
declare var $: any;
@Component({
  selector: 'app-panel-category',
  templateUrl: './panel-category.component.html',
  styleUrls: ['./panel-category.component.css']
})
export class PanelCategoryComponent {
  constructor(protected appService:ApiService,public router:Router,protected activatedRoute:ActivatedRoute) {
  }
  dt:any
  target_id:string=''
  ngOnInit(): void {
    let context=this
    $('#myDataTable').on('click', '.edit-btn', function() {
      // @ts-ignore
      var rowData = context.dt.row($(this).closest('tr')).data();
      context.router.navigate(['edit/'+rowData._id],{relativeTo:context.activatedRoute})
    });

    $("#modalConfirmDelete").on('hide.bs.modal', function(){
      context.target_id=''
    });
  }
  ngAfterViewInit() {
    this.dtbl()
  }

  private dtbl() {
    if (this.dt){
      this.dt.DataTable().destroy()
    }
    this.dt=$('#myDataTable').DataTable({
      serverSide: true,
      processing: true,
      ajax: {
        headers: {
          Authorization: "Bearer "+PitLib.User.data().token,
        },
        url:Endpoints.Category.DtList
      },
      columns: [
        { data: 'title' },
        {
          data: 'created_at',
          title: 'Created At',
          render: function (data:any, type:any, row:any) {
            return new Date(data).toLocaleDateString('en-IN');
          },
        },
        {
          data: '_id',
          title: 'Action',
          render: function (data:any, type:any, row:any) {
            return `
                <button action="ref" class="edit-btn btn btn-sm btn-warning btn-icon shadow-sm my-1">
                    <i class="fas fa-pencil"></i>
                </button>
                <button action="del" class="delete-btn btn btn-sm btn-danger btn-icon shadow-sm my-1">
                    <i class="fas fa-trash"></i>
                </button>
                `
          },
        }
      ],
      rowId: '_id'
    });
  }
}
