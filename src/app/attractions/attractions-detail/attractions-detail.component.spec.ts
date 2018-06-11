import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttractionsDetailComponent } from './attractions-detail.component';

describe('AttractionsDetailComponent', () => {
  let component: AttractionsDetailComponent;
  let fixture: ComponentFixture<AttractionsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
        declarations: [ AttractionsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttractionsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
