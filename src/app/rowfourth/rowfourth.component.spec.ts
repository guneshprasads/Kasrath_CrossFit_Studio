import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowfourthComponent } from './rowfourth.component';

describe('RowfourthComponent', () => {
  let component: RowfourthComponent;
  let fixture: ComponentFixture<RowfourthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowfourthComponent]
    });
    fixture = TestBed.createComponent(RowfourthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
