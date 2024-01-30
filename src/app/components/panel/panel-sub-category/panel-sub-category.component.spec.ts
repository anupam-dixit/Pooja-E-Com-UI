import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSubCategoryComponent } from './panel-sub-category.component';

describe('PanelSubCategoryComponent', () => {
  let component: PanelSubCategoryComponent;
  let fixture: ComponentFixture<PanelSubCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelSubCategoryComponent]
    });
    fixture = TestBed.createComponent(PanelSubCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
