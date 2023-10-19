import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsevenComponent } from './rowseven.component';

describe('RowsevenComponent', () => {
  let component: RowsevenComponent;
  let fixture: ComponentFixture<RowsevenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowsevenComponent]
    });
    fixture = TestBed.createComponent(RowsevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
