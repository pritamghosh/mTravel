import { Component, OnInit } from "@angular/core";
import { LoginService } from "../../services/login.service";
import { Subscription } from "rxjs";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.component.html",
  styleUrls: ["./wallet.component.scss"]
})
export class WalletComponent implements OnInit {
  constructor(private loginService: LoginService) {}
  balance = 0;

  icon = environment.currencyIcon;
  flightFare = 0;
  carFare = 0;
  hotelPrice = 0;
  insurancePrice = 0;
  ngOnInit(): void {
    this.balance = this.loginService.balance;

    this.flightFare = this.loginService.flightFare;
    this.carFare = this.loginService.carFare;
    this.hotelPrice = this.loginService.hotelPrice;
    this.insurancePrice = this.loginService.insurancePrice;
  }
}
