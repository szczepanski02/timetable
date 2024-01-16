import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelComponent } from './components/panel/panel.component';

export const SHARED_COMPONENTS = [
  PanelComponent,
];

@NgModule({
  declarations: [
    ...SHARED_COMPONENTS,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...SHARED_COMPONENTS,
  ]
})
export class SharedModule { }
