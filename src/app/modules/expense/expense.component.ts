import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/classes/data';
import { AccountService } from 'src/app/core/account.service';


@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.scss']
})
export class ExpenseComponent implements OnInit {

  private expenseData!: Data[];
  public retrieveData!: Data[];
  storage = 'expenseStorage';
  totalExpense = 0;

  constructor(private accountService: AccountService) {
    this.expenseData = [
      new Data('Expense01', 1000),
      new Data('Expense02', 2000)
    ];
    this.totalExpense = 3000;

    this.updateLocalStorage();

   }

  ngOnInit(): void {
  }

  addExpenses(text: any, amount:string) {
    var numberamount: number = +amount
    //console.log(text, numberamount);
    this.expenseData.push(this.accountService.addData(text, numberamount));
    this.totalExpense = this.totalExpense + this.expenseData[this.expenseData.length - 1 ].amount ; 
    this.updateLocalStorage();
    //console.log(this.retrieveData);
  }

  removeExpenseItem(text: any){
    const index = this.accountService.removeDatas(text,this.storage) as number;
    if (index > -1) {
      this.totalExpense = this.totalExpense - this.expenseData[index].amount ;
      this.expenseData.splice(index,1); 
      this.updateLocalStorage();
    }
  }



  updateLocalStorage() {

    this.accountService.setLocatStorageDatas(this.expenseData, this.storage);
    this.retrieveData = this.accountService.getDatas(this.storage);

  }


}

