import { Component } from '@angular/core';
import {PitLib} from "../../../../helpers/PitLib";
import {Endpoints} from "../../../../helpers/Endpoints";
import {FormControl, FormGroup} from "@angular/forms";
import {ApiService} from "../../../services/api-common/api.service";
import {ActivatedRoute, Router} from "@angular/router";
declare var DataTable: any
declare var $: any
@Component({
  selector: 'app-panel-role',
  templateUrl: './panel-role.component.html',
  styleUrls: ['./panel-role.component.css']
})
export class PanelRoleComponent {
  constructor(protected appService:ApiService,public router:Router,protected activatedRoute:ActivatedRoute) {
  }
  dt:any
  target_id:string=''
  ngOnInit(): void {
    // $('#myDataTable>button').on("click", (event:any) => {
    //   console.log($(event.target))
    //   switch ($(event.target).parent().attr("action")) {
    //     case "ref":
    //       alert('i')
    //       this.router.navigate(['../update/'+$(event.target).parent().attr("target")],{relativeTo:this.activatedRoute})
    //       break
    //     case "del":
    //       this.target_id = $(event.target).parent().attr("target")
    //       // this.confDelete()
    //       break
    //   }
    // });
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
      $('#myDataTable').DataTable().destroy()
    }
    this.dt=$('#myDataTable').DataTable({
      serverSide: true,
      processing: true,
      ajax: {
        headers: {
          Authorization: "Bearer "+PitLib.User.data().token,
        },
        url:Endpoints.User.Role.DtList
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
