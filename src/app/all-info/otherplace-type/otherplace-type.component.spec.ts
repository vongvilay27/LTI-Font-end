import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherplaceTypeComponent } from './otherplace-type.component';

describe('OtherplaceTypeComponent', () => {
  let component: OtherplaceTypeComponent;
  let fixture: ComponentFixture<OtherplaceTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherplaceTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherplaceTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
