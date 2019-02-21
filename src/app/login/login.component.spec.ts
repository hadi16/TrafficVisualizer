import {TestBed, async} from '@angular/core/testing';
import {LoginComponent} from './login.component';
import {RouterTestingModule} from "@angular/router/testing";
import {MaterialModule} from "../../helpers/material.module";

describe('Login Tests', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, MaterialModule],
      declarations: [LoginComponent],
    }).compileComponents();
  }));

  test('should create login component properly', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const loginComponent = fixture.debugElement.componentInstance;
    expect(loginComponent).toBeTruthy();
  });

  test('should have proper heading', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h2').textContent)
      .toContain('Please Login or Create an account');
  });
});