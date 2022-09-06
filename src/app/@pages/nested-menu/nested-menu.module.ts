import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NestedMenuRoutingModule } from './nested-menu-routing.module';
import { NestedMenuComponent } from './nested-menu.component';
import { NestedItemComponent } from './nested-item/nested-item.component';

import { MaterialModule } from '../../@shared/modules/material/material.module';



@NgModule({
  declarations: [
    NestedMenuComponent,
    NestedItemComponent
  ],
  imports: [
    CommonModule,
    NestedMenuRoutingModule,

    MaterialModule
  ]
})
export class NestedMenuModule { }
