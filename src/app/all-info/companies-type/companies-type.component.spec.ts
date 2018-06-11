import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesTypeComponent } from './companies-type.component';

describe('CompaniesTypeComponent', () => {
  let component: CompaniesTypeComponent;
  let fixture: ComponentFixture<CompaniesTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompaniesTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
