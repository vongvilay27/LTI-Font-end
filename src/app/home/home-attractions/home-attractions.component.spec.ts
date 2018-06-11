import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAttractionsComponent } from './home-attractions.component';

describe('HomeAttractionsComponent', () => {
  let component: HomeAttractionsComponent;
  let fixture: ComponentFixture<HomeAttractionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAttractionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAttractionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
