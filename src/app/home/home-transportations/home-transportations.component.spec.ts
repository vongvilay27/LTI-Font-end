import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTransportationsComponent } from './home-transportations.component';

describe('HomeTransportationsComponent', () => {
  let component: HomeTransportationsComponent;
  let fixture: ComponentFixture<HomeTransportationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTransportationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeTransportationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
