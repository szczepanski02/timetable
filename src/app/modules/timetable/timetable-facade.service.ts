import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, combineLatest, filter } from "rxjs";

@Injectable()
export class TimetableFacadeService {

  private selectedDay$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private selectedMonth$: BehaviorSubject<number> = new BehaviorSubject<number>(0);
  private selectedYear$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  private daysOfMonth$: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

  constructor() {
    combineLatest([this.selectedMonth$, this.selectedYear$])
      .pipe(
        filter(([month, year]) => !!month && !!year)
      ).subscribe(([month, year]) => this.setDaysOfMonth(month, year));
  }

  init(): void {
    const date = new Date();
    this.setDate(date);
  }

  // methods

  setDate(date: Date): void {
    this.setSelectedDay(date.getDate());
    this.setSelectedMonth(date.getMonth());
    this.setSelectedYear(date.getFullYear());
  }

  // getters

  getSelectedDay(): Observable<number> {
    return this.selectedDay$.asObservable();
  }

  getSelectedMonth(): Observable<number> {
    return this.selectedMonth$.asObservable();
  }

  getSelectedYear(): Observable<number> {
    return this.selectedYear$.asObservable();
  }

  getDaysOfMonth(): Observable<number[]> {
    return this.daysOfMonth$.asObservable();
  }

  // setters

  setSelectedDay(day: number): void {
    this.selectedDay$.next(day);
  }

  setSelectedMonth(month: number): void {
    this.selectedMonth$.next(month +1);
  }

  setSelectedYear(year: number): void {
    this.selectedYear$.next(year);
  }

  setDaysOfMonth(month: number, year: number): void {
    const daysInMonth = new Date(year, month, 0).getDate();
    let days: number[] = [];
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }
    this.daysOfMonth$.next(days);
  }
}