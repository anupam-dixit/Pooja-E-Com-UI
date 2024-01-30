import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelCategoryCreateComponent } from './panel-category-create.component';

describe('PanelCategoryCreateComponent', () => {
  let component: PanelCategoryCreateComponent;
  let fixture: ComponentFixture<PanelCategoryCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanelCategoryCreateComponent]
    });
    fixture = TestBed.createComponent(PanelCategoryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
