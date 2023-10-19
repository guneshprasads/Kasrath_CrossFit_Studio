import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsixComponent } from './rowsix.component';

describe('RowsixComponent', () => {
  let component: RowsixComponent;
  let fixture: ComponentFixture<RowsixComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowsixComponent]
    });
    fixture = TestBed.createComponent(RowsixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
