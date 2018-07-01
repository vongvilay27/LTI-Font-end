import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InternetDetailComponent } from './internet-detail.component';

describe('InternetDetailComponent', () => {
  let component: InternetDetailComponent;
  let fixture: ComponentFixture<InternetDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InternetDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InternetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
