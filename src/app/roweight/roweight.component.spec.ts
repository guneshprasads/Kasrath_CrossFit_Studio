import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoweightComponent } from './roweight.component';

describe('RoweightComponent', () => {
  let component: RoweightComponent;
  let fixture: ComponentFixture<RoweightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoweightComponent]
    });
    fixture = TestBed.createComponent(RoweightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
