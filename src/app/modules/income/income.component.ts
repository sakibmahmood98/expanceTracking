import { Component, OnInit } from '@angular/core';
import { Data } from 'src/app/classes/data';
import { AccountService } from 'src/app/core/account.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.scss']
})
export class IncomeComponent implements OnInit {
  private incomeData!: Data[];
  public retrieveData!: Data[];
  storage = 'incomeStorage';
  totalIncome = 0;

  constructor(private accountService: AccountService) {
    this.incomeData = [
      new Data("Income01", 1000),
    ];
    this.totalIncome = 1000;
    this.updateLocalStorage();
   }

  ngOnInit(): void {
    
  }

  addIncome(text: any, amount:string) {
    var numberamount: number = +amount
    //console.log(text, numberamount);
    this.incomeData.push(this.accountService.addData(text, numberamount));
    this.totalIncome = this.totalIncome + this.incomeData[this.incomeData.length - 1 ].amount ; 
    this.updateLocalStorage();
    //console.log(this.retrieveData);
  }

  removeIncomeItem(text: any){
    const index = this.accountService.removeDatas(text,this.storage);
    if (index > -1) {
      this.totalIncome = this.totalIncome - this.incomeData[index].amount ; 
      this.incomeData.splice(index,1);
      this.updateLocalStorage();

    }
  }

  updateLocalStorage(){

    this.accountService.setLocatStorageDatas(this.incomeData, this.storage);
    this.retrieveData = this.accountService.getDatas(this.storage);

    //this.totalIncome = this.totalIncome+this.retrieveData[this.retrieveData.length -1 ].amount;
    //console.log(this.totalIncome);
  }

  
}
