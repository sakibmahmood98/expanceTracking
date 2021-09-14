import { Injectable } from '@angular/core';
import { Data } from  '../classes/data';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  

  constructor() { 
    
  }

  public addData(text: string, amount: number) : any {
    let data = new Data(text,amount);
    return data;
    
  }

  public setLocatStorageDatas(datas: Data[], storage: string):void {
    localStorage.setItem(storage,JSON.stringify(datas as any));
  }

  public getDatas(storage: string): Data[] {
    let localStorageItem = JSON.parse(localStorage.getItem(storage) as any);
    return localStorageItem
  }
}
