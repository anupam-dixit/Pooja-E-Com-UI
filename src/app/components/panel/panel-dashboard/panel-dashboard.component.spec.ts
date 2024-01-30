import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDashboardComponent } from './panel-dashboard.component';

describe('PanelDashboardComponent', () => {
  let component: PanelDashboardComponent;
  let fixture: ComponentFixture<PanelDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelDashboardComponent]
    });
    fixture = TestBed.createComponent(PanelDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
