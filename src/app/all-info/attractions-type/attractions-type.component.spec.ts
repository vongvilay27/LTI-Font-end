import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsTypeComponent } from './attractions-type.component';

describe('AttractionsTypeComponent', () => {
  let component: AttractionsTypeComponent;
  let fixture: ComponentFixture<AttractionsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
