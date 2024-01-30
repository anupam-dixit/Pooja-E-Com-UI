import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRoleEditComponent } from './panel-role-edit.component';

describe('PanelRoleEditComponent', () => {
  let component: PanelRoleEditComponent;
  let fixture: ComponentFixture<PanelRoleEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelRoleEditComponent]
    });
    fixture = TestBed.createComponent(PanelRoleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
