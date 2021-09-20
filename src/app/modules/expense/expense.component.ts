import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
      {text: 'Expense01', amount: 1000, month: '01', year: '2021'},
      {text: 'Expense01', amount: 2000, month: '01', year: '2021'},

    ];
    this.totalExpense = 3000;

    this.updateLocalStorage();

    

   }

  ngOnInit(): void {
  }

    onSubmit(dataForm: { value: any; }) {
    let text = dataForm.value.text;
    var numberamount: number = +dataForm.value.amount;
   
    var dateData = dataForm.value.date;

    this.expenseData.push(this.service.addData(text, numberamount,dateData));
    this.getTotalExpense();
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

  getTotalExpense() {
    
      this.totalExpense = this.totalExpense + this.expenseData[this.expenseData.length - 1 ].amount ; 
    }
  

}

