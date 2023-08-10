import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableTitulosComponent } from './table-titulos.component';

describe('TableTitulosComponent', () => {
  let component: TableTitulosComponent;
  let fixture: ComponentFixture<TableTitulosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableTitulosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableTitulosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
