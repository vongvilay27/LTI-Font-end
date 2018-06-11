import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationsTypeComponent } from './transportations-type.component';

describe('TransportationsTypeComponent', () => {
  let component: TransportationsTypeComponent;
  let fixture: ComponentFixture<TransportationsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
