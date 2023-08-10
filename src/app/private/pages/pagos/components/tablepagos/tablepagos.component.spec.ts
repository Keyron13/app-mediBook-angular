import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablepagosComponent } from './tablepagos.component';

describe('TablepagosComponent', () => {
  let component: TablepagosComponent;
  let fixture: ComponentFixture<TablepagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablepagosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablepagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
