import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowfiveComponent } from './rowfive.component';

describe('RowfiveComponent', () => {
  let component: RowfiveComponent;
  let fixture: ComponentFixture<RowfiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowfiveComponent]
    });
    fixture = TestBed.createComponent(RowfiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
