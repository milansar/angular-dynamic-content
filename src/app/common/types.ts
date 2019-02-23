import { Type } from '@angular/core';

export interface EntryComponentsMap {
    [Key: string]: Type<any>;
}

export type ModuleWithEntryComponentsMap = Type<any> & { entryComponentsMap: EntryComponentsMap  };
