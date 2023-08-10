import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablerecetasComponent } from './tablerecetas.component';

describe('TablerecetasComponent', () => {
  let component: TablerecetasComponent;
  let fixture: ComponentFixture<TablerecetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablerecetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablerecetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
