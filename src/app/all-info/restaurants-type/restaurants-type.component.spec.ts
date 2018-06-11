import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsTypeComponent } from './restaurants-type.component';

describe('RestaurantsTypeComponent', () => {
  let component: RestaurantsTypeComponent;
  let fixture: ComponentFixture<RestaurantsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
