import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelTopNavComponent } from './panel-top-nav.component';

describe('PanelTopNavComponent', () => {
  let component: PanelTopNavComponent;
  let fixture: ComponentFixture<PanelTopNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelTopNavComponent]
    });
    fixture = TestBed.createComponent(PanelTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
