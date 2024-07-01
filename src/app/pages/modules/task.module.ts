import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TaskViewComponent } from '../task-view/task-view.component';

@NgModule({
  declarations: [
    TaskViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskViewComponent
  ]
})
export class TaskModule { }
