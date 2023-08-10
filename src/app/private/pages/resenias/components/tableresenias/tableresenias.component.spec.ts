import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablereseniasComponent } from './tableresenias.component';

describe('TablereseniasComponent', () => {
  let component: TablereseniasComponent;
  let fixture: ComponentFixture<TablereseniasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablereseniasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablereseniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
