import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import {EntryComponentsMap } from './../common/types';
import { DynamicMultipleOneComponent } from './dynamic-multiple-one.component';
import { DynamicMultipleTwoComponent } from './dynamic-multiple-two.component';

const entryComponentsMap: EntryComponentsMap = {
  DynamicMultipleOneComponent,
  DynamicMultipleTwoComponent
};

@NgModule({
  declarations: [DynamicMultipleOneComponent, DynamicMultipleTwoComponent],
  imports: [CommonModule],
  entryComponents: [DynamicMultipleOneComponent, DynamicMultipleTwoComponent]
})
export class DynamicMultipleModule {
  static entryComponentsMap: EntryComponentsMap = entryComponentsMap;
}
