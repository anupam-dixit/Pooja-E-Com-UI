import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCategoryEditComponent } from './panel-category-edit.component';

describe('PanelCategoryEditComponent', () => {
  let component: PanelCategoryEditComponent;
  let fixture: ComponentFixture<PanelCategoryEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelCategoryEditComponent]
    });
    fixture = TestBed.createComponent(PanelCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
