import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHorarioComponent } from './edit-horario.component';

describe('EditHorarioComponent', () => {
  let component: EditHorarioComponent;
  let fixture: ComponentFixture<EditHorarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditHorarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditHorarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
