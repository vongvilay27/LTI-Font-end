import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheltersTypeComponent } from './shelters-type.component';

describe('SheltersTypeComponent', () => {
  let component: SheltersTypeComponent;
  let fixture: ComponentFixture<SheltersTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheltersTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheltersTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
