import { Component, Input, OnInit } from '@angular/core';

import { Account } from '../../entities/account';
import { AccountService } from '../../services/account.service';

@Component({
  selector: 'account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() label: any;
  @Input() id: number;
  accounts: Array<Account>;

  constructor(private accountService: AccountService) {}

  ngOnInit() {
    this.accounts = this.accountService.get();
  }

}
