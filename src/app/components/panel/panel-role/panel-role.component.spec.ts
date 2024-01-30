import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRoleComponent } from './panel-role.component';

describe('PanelRoleComponent', () => {
  let component: PanelRoleComponent;
  let fixture: ComponentFixture<PanelRoleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelRoleComponent]
    });
    fixture = TestBed.createComponent(PanelRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
