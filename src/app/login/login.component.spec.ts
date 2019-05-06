import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be able to login and navigate to home page', () => {
    component.emailid = 'xyz@gmail.com';
    component.password = '1234';
    component.userlogin();
    expect(component.router.navigate(['/home'])).toBeTruthy();
  });

  it('should not be able to login if password is wrong', () => {
    component.emailid = 'xyz@gmail.com';
    component.password = '23456';
    component.userlogin();
    expect(component.InvalidUser).toBeTruthy();
  });
});
