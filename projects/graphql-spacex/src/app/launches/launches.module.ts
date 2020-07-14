import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaunchesRoutingModule } from './launches-routing.module';
import { ListComponent } from './components/list/list.component';
import { DetailComponent } from './components/detail/detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [ListComponent, DetailComponent],
  imports: [
    CommonModule,
    LaunchesRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule
  ]
})
export class LaunchesModule { }
