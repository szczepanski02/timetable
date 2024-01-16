import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TimetableFacadeService } from '../timetable-facade.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-timetable-day-picker-item',
  templateUrl: './timetable-day-picker-item.component.html',
  styleUrls: ['./timetable-day-picker-item.component.scss']
})
export class TimetableDayPickerItemComponent {
  
  @Input() day!: number;
  @Input() month!: number;
  @Output() appDaySelect: EventEmitter<number> = new EventEmitter<number>();

  get isActive(): Observable<boolean> {
    return this.timetableFacade.getSelectedDay()
      .pipe(
        map(day => day === this.day)
      );
  }

  get formattedMonth(): Date {
    const date = new Date();
    date.setMonth(this.month - 1);
    return date;
  }
  
  constructor(private timetableFacade: TimetableFacadeService) {}

  onDaySelect(): void {
    this.appDaySelect.emit(this.day);
  }
}
