import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCategoryListComponent } from './panel-category-list.component';

describe('PanelCategoryListComponent', () => {
  let component: PanelCategoryListComponent;
  let fixture: ComponentFixture<PanelCategoryListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelCategoryListComponent]
    });
    fixture = TestBed.createComponent(PanelCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
