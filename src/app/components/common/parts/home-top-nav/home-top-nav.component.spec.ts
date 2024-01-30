import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopNavComponent } from './home-top-nav.component';

describe('HomeTopNavComponent', () => {
  let component: HomeTopNavComponent;
  let fixture: ComponentFixture<HomeTopNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeTopNavComponent]
    });
    fixture = TestBed.createComponent(HomeTopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
