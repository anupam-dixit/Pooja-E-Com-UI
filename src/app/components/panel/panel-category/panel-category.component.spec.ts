import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCategoryComponent } from './panel-category.component';

describe('PanelCategoryComponent', () => {
  let component: PanelCategoryComponent;
  let fixture: ComponentFixture<PanelCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelCategoryComponent]
    });
    fixture = TestBed.createComponent(PanelCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
