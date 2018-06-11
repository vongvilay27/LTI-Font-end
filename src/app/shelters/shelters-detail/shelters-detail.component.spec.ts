import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SheltersDetailComponent } from './shelters-detail.component';

describe('SheltersDetailComponent', () => {
  let component: SheltersDetailComponent;
  let fixture: ComponentFixture<SheltersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SheltersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SheltersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
