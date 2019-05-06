import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewmodeldashboardComponent } from './viewmodeldashboard.component';

describe('ViewmodeldashboardComponent', () => {
  let component: ViewmodeldashboardComponent;
  let fixture: ComponentFixture<ViewmodeldashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewmodeldashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewmodeldashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
