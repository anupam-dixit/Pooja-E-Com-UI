import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-panel-header',
  templateUrl: './panel-header.component.html',
  styleUrls: ['./panel-header.component.css']
})
export class PanelHeaderComponent {
  @Input() icon:string='house'
  @Input() title:string='Panel'
  @Input() description:string='Control Panel'
}
