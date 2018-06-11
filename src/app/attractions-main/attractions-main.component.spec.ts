import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsMainComponent } from './attractions-main.component';

describe('AttractionsMainComponent', () => {
  let component: AttractionsMainComponent;
  let fixture: ComponentFixture<AttractionsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttractionsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
