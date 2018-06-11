import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationsDetailComponent } from './transportations-detail.component';

describe('TransportationsDetailComponent', () => {
  let component: TransportationsDetailComponent;
  let fixture: ComponentFixture<TransportationsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
