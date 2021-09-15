import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeComponent } from './income.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CoreModule } from 'src/app/core/core.module';
import { MatListModule } from '@angular/material/list';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IncomeComponent
  ],
  imports: [
    CommonModule,
    IncomeRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    CoreModule,
    ReactiveFormsModule

  ]
})
export class IncomeModule { }
