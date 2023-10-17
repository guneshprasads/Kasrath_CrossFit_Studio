import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowthirdComponent } from './rowthird.component';

describe('RowthirdComponent', () => {
  let component: RowthirdComponent;
  let fixture: ComponentFixture<RowthirdComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowthirdComponent]
    });
    fixture = TestBed.createComponent(RowthirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
