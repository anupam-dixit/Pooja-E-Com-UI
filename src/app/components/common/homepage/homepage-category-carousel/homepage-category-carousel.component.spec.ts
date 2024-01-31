import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCategoryCarouselComponent } from './homepage-category-carousel.component';

describe('HomepageCategoryCarouselComponent', () => {
  let component: HomepageCategoryCarouselComponent;
  let fixture: ComponentFixture<HomepageCategoryCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageCategoryCarouselComponent]
    });
    fixture = TestBed.createComponent(HomepageCategoryCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
