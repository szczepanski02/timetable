import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimetableComponent } from './timetable.component';
import { TimetableTableComponent } from './timetable-table/timetable-table.component';
import { TimetableTableItemComponent } from './timetable-table-item/timetable-table-item.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { TimetableFacadeService } from './timetable-facade.service';
import { TimetableDayPickerComponent } from './timetable-day-picker/timetable-day-picker.component';
import { TimetableDayPickerItemComponent } from './timetable-day-picker-item/timetable-day-picker-item.component';



@NgModule({
  declarations: [
    TimetableComponent,
    TimetableTableComponent,
    TimetableTableItemComponent,
    TimetableDayPickerComponent,
    TimetableDayPickerItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  providers: [
    TimetableFacadeService,
  ]
})
export class TimetableModule { }
