import { Component, OnInit } from '@angular/core';
import { TimetableFacadeService } from './timetable-facade.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  selectedDay$: Observable<number> = this.timetableFacade.getSelectedDay();
  selectedMonth$: Observable<number> = this.timetableFacade.getSelectedMonth();
  selectedYear$: Observable<number> = this.timetableFacade.getSelectedYear();

  daysOfMonth$: Observable<number[]> = this.timetableFacade.getDaysOfMonth();

  constructor(private timetableFacade: TimetableFacadeService) {
  }

  ngOnInit(): void {
    this.timetableFacade.init();
  }
}
