import { Component } from '@angular/core';
import {Env} from "../helpers/Env";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router:Router) {
  }
  title = Env.APP.NAME;
}
