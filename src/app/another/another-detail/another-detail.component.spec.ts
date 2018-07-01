import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherDetailComponent } from './another-detail.component';

describe('AnotherDetailComponent', () => {
  let component: AnotherDetailComponent;
  let fixture: ComponentFixture<AnotherDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnotherDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
