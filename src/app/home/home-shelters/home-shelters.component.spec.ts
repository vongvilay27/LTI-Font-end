import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSheltersComponent } from './home-shelters.component';

describe('HomeSheltersComponent', () => {
  let component: HomeSheltersComponent;
  let fixture: ComponentFixture<HomeSheltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSheltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSheltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
