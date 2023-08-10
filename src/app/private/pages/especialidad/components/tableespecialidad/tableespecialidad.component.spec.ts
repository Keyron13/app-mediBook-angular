import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableespecialidadComponent } from './tableespecialidad.component';

describe('TableespecialidadComponent', () => {
  let component: TableespecialidadComponent;
  let fixture: ComponentFixture<TableespecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableespecialidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableespecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
