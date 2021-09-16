import { Injectable } from '@angular/core';
import { Data } from  '../core/models/data';

@Injectable({
  providedIn: 'root'
})
export class StorageService{
  

  constructor() { 
    
  }

  public addData(text: string, amount: number, dateData: string) : any {

    let dateDatas = dateData.split('-',3);
    let month = dateDatas[1];
    let year = dateDatas[0];
    let date = dateDatas[2];
    let data ={ text: text, amount: amount, month: month, year: year};

    return data;
    
  }

  public getDatainNumber(data: string)
  {
    
    let datainNumber : number =  +data;
    return datainNumber
  }

  public setLocatStorageDatas(datas: Data[], storage: string):void {
    localStorage.setItem(storage,JSON.stringify(datas as any));
  }

  public getDatas(storage: string): Data[] {
    let localStorageItem = JSON.parse(localStorage.getItem(storage) as any);
    return localStorageItem
  }

  public removeDatas(text: any, storage: string): any {
    let data = this.getDatas(storage);
    const index = data.findIndex((s: any)=> s.text === text);

    return index;
  }

}
