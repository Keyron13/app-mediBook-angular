import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablecitasComponent } from './tablecitas.component';

describe('TablecitasComponent', () => {
  let component: TablecitasComponent;
  let fixture: ComponentFixture<TablecitasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablecitasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablecitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
