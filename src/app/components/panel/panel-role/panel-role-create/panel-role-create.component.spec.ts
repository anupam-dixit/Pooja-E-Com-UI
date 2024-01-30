import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRoleCreateComponent } from './panel-role-create.component';

describe('PanelRoleCreateComponent', () => {
  let component: PanelRoleCreateComponent;
  let fixture: ComponentFixture<PanelRoleCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelRoleCreateComponent]
    });
    fixture = TestBed.createComponent(PanelRoleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
