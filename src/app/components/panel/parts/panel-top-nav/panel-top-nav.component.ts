import { Component } from '@angular/core';
import {PitLib} from "../../../../../helpers/PitLib";

@Component({
  selector: 'app-panel-top-nav',
  templateUrl: './panel-top-nav.component.html',
  styleUrls: ['./panel-top-nav.component.css']
})
export class PanelTopNavComponent {

    protected readonly PitLib = PitLib;
}
