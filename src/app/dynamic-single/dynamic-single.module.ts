import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { DynamicSingleOneComponent } from './dynamic-single-one.component';
import {EntryComponentsMap } from './../common/types';

@NgModule({
  declarations: [DynamicSingleOneComponent],
  imports: [CommonModule],
  entryComponents: [DynamicSingleOneComponent]
})
export class DynamicSingleModule {
  static entryComponentsMap: EntryComponentsMap = {
    'DynamicSingleOneComponent': DynamicSingleOneComponent
  };
}
