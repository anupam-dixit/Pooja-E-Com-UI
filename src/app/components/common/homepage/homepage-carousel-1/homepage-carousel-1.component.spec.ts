import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageCarousel1Component } from './homepage-carousel-1.component';

describe('HomepageCarousel1Component', () => {
  let component: HomepageCarousel1Component;
  let fixture: ComponentFixture<HomepageCarousel1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageCarousel1Component]
    });
    fixture = TestBed.createComponent(HomepageCarousel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
