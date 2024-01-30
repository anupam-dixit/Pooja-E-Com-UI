import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSideNavComponent } from './panel-side-nav.component';

describe('PanelSideNavComponent', () => {
  let component: PanelSideNavComponent;
  let fixture: ComponentFixture<PanelSideNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelSideNavComponent]
    });
    fixture = TestBed.createComponent(PanelSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
