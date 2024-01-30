import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelSubCategoryListComponent } from './panel-sub-category-list.component';

describe('PanelSubCategoryListComponent', () => {
  let component: PanelSubCategoryListComponent;
  let fixture: ComponentFixture<PanelSubCategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelSubCategoryListComponent]
    });
    fixture = TestBed.createComponent(PanelSubCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
