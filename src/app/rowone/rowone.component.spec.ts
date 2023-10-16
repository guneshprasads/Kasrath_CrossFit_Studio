import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RowoneComponent } from './rowone.component';

describe('RowoneComponent', () => {
  let component: RowoneComponent;
  let fixture: ComponentFixture<RowoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RowoneComponent]
    });
    fixture = TestBed.createComponent(RowoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
