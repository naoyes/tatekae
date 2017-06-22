import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './app-form.component.html',
  styleUrls: ['./app-form.component.css']
})
export class AppFormComponent implements OnInit {

  date: Date = new Date();
  advancePayment = 0;
  payment = this.advancePayment - this.repayment;
  repayment = 0;

  constructor() {}

  ngOnInit() {
  }

  onSubmit(): void {
    console.log('payment ' + this.payment);
    console.log('advancePayment ' + this.advancePayment);
    console.log('repayment ' + this.repayment);
  }
}
