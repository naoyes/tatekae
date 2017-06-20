import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {

  date: Date = new Date();
  amount = 0;
  payment = 0;
  repayment: number = this.amount;

  constructor() {}

  ngOnInit() {
  }

  onSubmit(): void {
    console.log('amount ' + this.amount);
    console.log('payment ' + this.payment);
    console.log('repayment ' + this.repayment);
  }
}
