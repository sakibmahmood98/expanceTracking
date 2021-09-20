import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }
  toExpense() {
    this.router.navigate(['expense'], {relativeTo:this.route});

  }

  toIncome() {
    this.router.navigate(['income'], {relativeTo:this.route});

  }

  toPosts() {
    this.router.navigate(['posts'], {relativeTo:this.route});
  }

}
