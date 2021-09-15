import { Component, Input, OnInit } from '@angular/core';
import { Data } from 'src/app/core/models/data';;
import { StorageService } from 'src/app/core/storage.service';


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

  constructor(private service: StorageService) {
    this.expenseData = [
      {text: 'Expense01', amount: 1000},
      {text: 'Expense01', amount: 2000},

    ];
    this.totalExpense = 3000;

    this.updateLocalStorage();

   }

  ngOnInit(): void {
  }

  addExpenses(text: any, amount:string) {
    var numberamount: number = +amount

    this.expenseData.push(this.service.addData(text, numberamount));
    this.totalExpense = this.totalExpense + this.expenseData[this.expenseData.length - 1 ].amount ; 
    this.updateLocalStorage();

  }

  removeExpenseItem(text: any){
    const index = this.service.removeDatas(text,this.storage) as number;
    if (index > -1) {
      this.totalExpense = this.totalExpense - this.expenseData[index].amount ;
      this.expenseData.splice(index,1); 
      this.updateLocalStorage();
    }
  }


  updateLocalStorage() {

    this.service.setLocatStorageDatas(this.expenseData, this.storage);
    this.retrieveData = this.service.getDatas(this.storage);

  }


}

