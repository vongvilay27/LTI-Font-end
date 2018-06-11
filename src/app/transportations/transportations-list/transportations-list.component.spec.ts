import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportationsListComponent } from './transportations-list.component';

describe('TransportationsListComponent', () => {
  let component: TransportationsListComponent;
  let fixture: ComponentFixture<TransportationsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransportationsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransportationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
