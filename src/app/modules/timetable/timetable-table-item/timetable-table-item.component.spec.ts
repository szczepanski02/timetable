import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimetableTableItemComponent } from './timetable-table-item.component';

describe('TimetableTableItemComponent', () => {
  let component: TimetableTableItemComponent;
  let fixture: ComponentFixture<TimetableTableItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimetableTableItemComponent]
    });
    fixture = TestBed.createComponent(TimetableTableItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
