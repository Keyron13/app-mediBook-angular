import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearResetPasswordComponent } from './crear-reset-password.component';

describe('CrearResetPasswordComponent', () => {
  let component: CrearResetPasswordComponent;
  let fixture: ComponentFixture<CrearResetPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearResetPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearResetPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
