import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-panel-side-nav',
  templateUrl: './panel-side-nav.component.html',
  styleUrls: ['./panel-side-nav.component.css']
})
export class PanelSideNavComponent {
  constructor(public route:Router) {
  }
}
