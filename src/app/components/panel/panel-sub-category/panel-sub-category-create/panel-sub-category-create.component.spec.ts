import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSubCategoryCreateComponent } from './panel-sub-category-create.component';

describe('PanelSubCategoryCreateComponent', () => {
  let component: PanelSubCategoryCreateComponent;
  let fixture: ComponentFixture<PanelSubCategoryCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelSubCategoryCreateComponent]
    });
    fixture = TestBed.createComponent(PanelSubCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
