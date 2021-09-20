import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ExpenseRoutingModule } from './expense-routing.module';
import { ExpenseComponent } from './expense.component';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CoreModule } from 'src/app/core/core.module';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    ExpenseComponent
  ],
  imports: [
    CommonModule,
    ExpenseRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    FormsModule,
    CoreModule
    


  ]
})
export class ExpenseModule { }
