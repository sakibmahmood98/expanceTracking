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
  public retrieveData: Data[];
  

  constructor(private accountService: AccountService) {
    this.incomeData = [
      new Data("Income01", 1000),
      new Data("Income02", 2000),
    ];
    this.accountService.setLocatStorageDatas(this.incomeData, 'incomeStorage');
    this.retrieveData = this.accountService.getDatas('incomeStorage');
   }

  ngOnInit(): void {
    
  }

  addIncome(text: any, amount:string) {
    var numberamount: number = +amount
    //console.log(text, numberamount);
    this.incomeData.push(this.accountService.addData(text, numberamount));

    this.accountService.setLocatStorageDatas(this.incomeData, 'incomeStorage');
    this.retrieveData = this.accountService.getDatas('incomeStorage');
    //console.log(this.retrieveData);
  }
}
