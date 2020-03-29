import { Component, OnInit, OnDestroy } from "@angular/core";
import { LoginService } from "../services/login.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { environment } from "src/environments/environment";
import {
  MatBottomSheet,
  MatBottomSheetRef
} from "@angular/material/bottom-sheet";
import { WalletComponent } from "./wallet/wallet.component";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit, OnDestroy {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private _bottomSheet: MatBottomSheet
  ) {}
  isLoggedIn = false;
  subs: Subscription;
  balSubs: Subscription;
  balance = 0;
  ngOnInit(): void {
    this.isLoggedIn = this.loginService.isLoggedIn();
    this.subs = this.loginService.isLoggedInSubject
      .asObservable()
      .subscribe(resp => (this.isLoggedIn = resp));
    this.balSubs = this.loginService.balanceSubject
      .asObservable()
      .subscribe(resp => (this.balance = resp));
    this.loginService.getBalance();
  }
  get bagHistoryApi() {
    return environment.bagHistoryUrl;
  }

  showWalletDetails() {
    this.loginService
      .getBalance()
      .then(() => this._bottomSheet.open(WalletComponent));
  }
  refreshBalance() {
    this.loginService.getBalance();
  }
  signOut() {
    this.loginService.signOut();
    this.router.navigateByUrl("/login");
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.balSubs.unsubscribe();
  }
}
