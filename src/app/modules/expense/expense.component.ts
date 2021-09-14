import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Data } from 'src/app/classes/data';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  private expenseData!: Data[];

  constructor(private accountService: AccountService) {
    this.expenseData = [
      new Data("Expense01", 1000),
      new Data("Expense02", 2000)
    ];
   }

  ngOnInit(): void {

  }

  addExpenses(text: any, amount:string) {
    var numberamount: number = +amount
    console.log(text, numberamount);
    this.expenseData.push(this.accountService.addData(text, numberamount));

    this.accountService.setLocatStorageDatas(this.expenseData, 'expenseStorage');
    
    let retrieveData = this.accountService.getDatas('expenseStorage');
    console.log(retrieveData);
  }
}

