import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesDetailComponent } from './companies-detail.component';

describe('CompaniesDetailComponent', () => {
  let component: CompaniesDetailComponent;
  let fixture: ComponentFixture<CompaniesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
