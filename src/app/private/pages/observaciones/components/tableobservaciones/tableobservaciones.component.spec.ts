import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableobservacionesComponent } from './tableobservaciones.component';

describe('TableobservacionesComponent', () => {
  let component: TableobservacionesComponent;
  let fixture: ComponentFixture<TableobservacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableobservacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableobservacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
