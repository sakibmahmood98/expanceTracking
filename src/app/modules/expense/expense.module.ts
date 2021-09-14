import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';

import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseComponent } from './expense.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountService } from '../account.service';


@NgModule({
  declarations: [
    ExpenseComponent
  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    AccountService
  ]
})
export class ExpenseModule { }
