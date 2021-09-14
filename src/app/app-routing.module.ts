import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"", 
    loadChildren: () => import('./modules/home/home.module')
    .then(m => m.HomeModule)
  },
  {
    path:'expense', 
    loadChildren: () => import('./modules/expense/expense.module')
    .then(m => m.ExpenseModule)
  },
  {
    path:'income', 
    loadChildren: () => import('./modules/income/income.module')
    .then(m => m.IncomeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
