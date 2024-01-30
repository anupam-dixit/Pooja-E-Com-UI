import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelTopNavComponent } from './components/panel/parts/panel-top-nav/panel-top-nav.component';
import { PanelSideNavComponent } from './components/panel/parts/panel-side-nav/panel-side-nav.component';
import { PanelFooterComponent } from './components/panel/parts/panel-footer/panel-footer.component';
import { PanelHeaderComponent } from './components/panel/parts/panel-header/panel-header.component';
import { PanelDashboardComponent } from './components/panel/panel-dashboard/panel-dashboard.component';
import { PanelUserComponent } from './components/panel/panel-user/panel-user.component';
import { PanelRoleComponent } from './components/panel/panel-role/panel-role.component';
import { PanelLoginComponent } from './components/panel/panel-login/panel-login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BtnLoaderComponent } from './components/parts/btn-loader/btn-loader.component';
import {HttpClientModule} from "@angular/common/http";
import { PanelRoleEditComponent } from './components/panel/panel-role/panel-role-edit/panel-role-edit.component';
import { PanelRoleCreateComponent } from './components/panel/panel-role/panel-role-create/panel-role-create.component';
import { HomepageComponent } from './components/common/homepage/homepage.component';
import { HomeFooterComponent } from './components/common/parts/home-footer/home-footer.component';
import { HomeTopNavComponent } from './components/common/parts/home-top-nav/home-top-nav.component';
import { PanelCategoryComponent } from './components/panel/panel-category/panel-category.component';
import { PanelCategoryCreateComponent } from './components/panel/panel-category/panel-category-create/panel-category-create.component';
import { PanelCategoryListComponent } from './components/panel/panel-category/panel-category-list/panel-category-list.component';
import { PanelCategoryEditComponent } from './components/panel/panel-category/panel-category-edit/panel-category-edit.component';
import { PanelSubCategoryComponent } from './components/panel/panel-sub-category/panel-sub-category.component';
import { PanelSubCategoryEditComponent } from './components/panel/panel-sub-category/panel-sub-category-edit/panel-sub-category-edit.component';
import { PanelSubCategoryCreateComponent } from './components/panel/panel-sub-category/panel-sub-category-create/panel-sub-category-create.component';
import { PanelSubCategoryListComponent } from './components/panel/panel-sub-category/panel-sub-category-list/panel-sub-category-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelTopNavComponent,
    PanelSideNavComponent,
    PanelFooterComponent,
    PanelHeaderComponent,
    PanelDashboardComponent,
    PanelUserComponent,
    PanelRoleComponent,
    PanelLoginComponent,
    BtnLoaderComponent,
    PanelRoleEditComponent,
    PanelRoleCreateComponent,
    HomepageComponent,
    HomeFooterComponent,
    HomeTopNavComponent,
    PanelCategoryComponent,
    PanelCategoryCreateComponent,
    PanelCategoryListComponent,
    PanelCategoryEditComponent,
    PanelSubCategoryComponent,
    PanelSubCategoryEditComponent,
    PanelSubCategoryCreateComponent,
    PanelSubCategoryListComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
