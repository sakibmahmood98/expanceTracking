import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from 'src/app/core/models/data';
import { StorageService } from 'src/app/core/storage.service';

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

    form = new FormGroup({
    text: new FormControl(''),
    amount: new FormControl('')

  });

  constructor(private service: StorageService) {

    this.incomeData = [
      {text: 'Income01', amount: 2000},
      {text: 'Income02', amount: 3000},

    ];
    this.totalIncome = 5000;
    this.updateLocalStorage();
   }
   
  ngOnInit(): void {

    
  }

    onSubmit() {
    let text = this.form.value.text;
    var numberamount: number = +this.form.value.amount

    this.incomeData.push(this.service.addData(text, numberamount));
    this.totalIncome = this.totalIncome + this.incomeData[this.incomeData.length - 1 ].amount ; 
    this.updateLocalStorage();

  }

  removeIncomeItem(text: any){
    const index = this.service.removeDatas(text,this.storage);
    if (index > -1) {
      this.totalIncome = this.totalIncome - this.incomeData[index].amount ; 
      this.incomeData.splice(index,1);
      this.updateLocalStorage();

    }
  }

  updateLocalStorage(){

    this.service.setLocatStorageDatas(this.incomeData, this.storage);
    this.retrieveData = this.service.getDatas(this.storage);

    // this.retrieveData.forEach(x=>{
    //   this.form.addControl(x.text,new FormControl(x.amount) );
    //  });

  }
  
}
