import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsecondComponent } from './rowsecond.component';

describe('RowsecondComponent', () => {
  let component: RowsecondComponent;
  let fixture: ComponentFixture<RowsecondComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowsecondComponent]
    });
    fixture = TestBed.createComponent(RowsecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
