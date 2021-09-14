import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IncomeRoutingModule } from './income-routing.module';
import { IncomeComponent } from './income.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';


@NgModule({
  declarations: [
    IncomeComponent
  ],
  imports: [
    CommonModule,
    IncomeRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule
  ]
})
export class IncomeModule { }
