import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {PanelDashboardComponent} from "./components/panel/panel-dashboard/panel-dashboard.component";
import {PanelUserComponent} from "./components/panel/panel-user/panel-user.component";
import {PanelRoleComponent} from "./components/panel/panel-role/panel-role.component";
import {PanelLoginComponent} from "./components/panel/panel-login/panel-login.component";
import {ensureLoggedInGuard} from "./guards/ensureLoggedIn/ensure-logged-in.guard";
import {PanelRoleEditComponent} from "./components/panel/panel-role/panel-role-edit/panel-role-edit.component";
import {PanelRoleCreateComponent} from "./components/panel/panel-role/panel-role-create/panel-role-create.component";
import {HomepageComponent} from "./components/common/homepage/homepage.component";
import {PanelCategoryComponent} from "./components/panel/panel-category/panel-category.component";
import {
  PanelCategoryCreateComponent
} from "./components/panel/panel-category/panel-category-create/panel-category-create.component";
import {
  PanelCategoryEditComponent
} from "./components/panel/panel-category/panel-category-edit/panel-category-edit.component";
import {PanelSubCategoryComponent} from "./components/panel/panel-sub-category/panel-sub-category.component";
import {
  PanelSubCategoryCreateComponent
} from "./components/panel/panel-sub-category/panel-sub-category-create/panel-sub-category-create.component";
import {
  PanelSubCategoryEditComponent
} from "./components/panel/panel-sub-category/panel-sub-category-edit/panel-sub-category-edit.component";

const routes: Routes = [
  { path: '',component:HomepageComponent,title:"Homepage"},
  { path: 'panel/login',component:PanelLoginComponent,title:"Panel Login"},
  { path: 'panel/dashboard',component:PanelDashboardComponent,title:"Dashboard",canActivate:[ensureLoggedInGuard]},
  { path: 'panel/user',component:PanelUserComponent,title:"User"},
  {path: 'panel/user/role',component:PanelRoleComponent,title:"User Roles",
    children: [
      { path: 'create',component:PanelRoleCreateComponent,title:"Create Role"},
      { path: 'edit/:_id',component:PanelRoleEditComponent,title:"Edit Role"},
    ]
  },
  {path: 'panel/category',component:PanelCategoryComponent,title:"Product Categories",
    children: [
      { path: 'create',component:PanelCategoryCreateComponent,title:"Create Category"},
      { path: 'edit/:_id',component:PanelCategoryEditComponent,title:"Edit Category"},
    ]
  },
  {path: 'panel/sub-category',component:PanelSubCategoryComponent,title:"Product Sub Categories",
    children: [
      { path: 'create',component:PanelSubCategoryCreateComponent,title:"Create Sub Category"},
      { path: 'edit/:_id',component:PanelSubCategoryEditComponent,title:"Edit Sub Category"},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation:"reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
