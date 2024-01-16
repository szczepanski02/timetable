import { AfterViewInit, Component, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { TimetableFacadeService } from '../timetable-facade.service';
import { Observable, Subscription, combineLatest, filter, first, map } from 'rxjs';

@Component({
  selector: 'app-timetable-day-picker',
  templateUrl: './timetable-day-picker.component.html',
  styleUrls: ['./timetable-day-picker.component.scss']
})
export class TimetableDayPickerComponent implements AfterViewInit, OnDestroy {

  @ViewChild('horizontalList') horizontalListElement?: ElementRef;

  daysOfMonth$: Observable<number[]> = this.timetableFacade.getDaysOfMonth();
  selectedDay$: Observable<number> = this.timetableFacade.getSelectedDay();
  selectedMonth$: Observable<number> = this.timetableFacade.getSelectedMonth();

  listItemWidthPx = 64;
  listItemGapWidthPx = 10;

  private _subs = new Subscription();

  get scrollOffset(): Observable<number> {
    return combineLatest([this.daysOfMonth$, this.selectedDay$])
      .pipe(
        filter(([daysOfMonth, selectedDay]) => !!daysOfMonth && !!selectedDay),
        map(([daysOfMonth, selectedDay]) => {
          const index = daysOfMonth.findIndex(day => day === selectedDay) - 3;
          return (index > 0 ? index : 0 )* (this.listItemGapWidthPx + this.listItemWidthPx);
        })
      );
  }

  constructor(
    private timetableFacade: TimetableFacadeService,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    if (this.horizontalListElement) {
      this._subs.add(this.scrollOffset
        .pipe(first())
        .subscribe(offset => this.renderer.setProperty(
            this.horizontalListElement!.nativeElement,
            'scrollLeft',
            offset
          ),
        ));
    }
  }

  ngOnDestroy(): void {
    this._subs.unsubscribe();
  }
  
  selectDay(day: number): void {
    this.timetableFacade.setSelectedDay(day);
  }

}
