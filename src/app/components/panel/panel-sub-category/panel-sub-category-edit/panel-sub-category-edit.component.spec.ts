import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSubCategoryEditComponent } from './panel-sub-category-edit.component';

describe('PanelSubCategoryEditComponent', () => {
  let component: PanelSubCategoryEditComponent;
  let fixture: ComponentFixture<PanelSubCategoryEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelSubCategoryEditComponent]
    });
    fixture = TestBed.createComponent(PanelSubCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
